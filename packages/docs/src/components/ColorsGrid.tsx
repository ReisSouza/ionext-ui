import { Toast, ToastProvider } from '@ionext-ui/react'
import { colors } from '@ionext-ui/tokens'

import { getContrast } from 'polished'
import { ReactNode, useState } from 'react'

type ListToastProps = {
  title: ReactNode
  description: ReactNode
  id: number
}

export function ColorsGrid() {
  const [listToast, setListToast] = useState<ListToastProps[]>([])

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text)
      setListToast((prevState) => {
        return [
          ...prevState,
          {
            title: <p>Cor copiada</p>,
            description: (
              <p>
                RGB{' '}
                <strong
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    background: text,
                    color: getContrast(text, '#FFF') < 3.5 ? '#000' : '#fff',
                  }}
                >
                  {text}
                </strong>
              </p>
            ),
            id: prevState.length + 1,
          },
        ]
      })
    } else {
      return document.execCommand('copy', true, text)
    }
  }
  return (
    <ToastProvider>
      {Object.entries(colors).map(([key, color]) => {
        return (
          <div
            onClick={() => {
              copyTextToClipboard(color)
            }}
            key={key}
            style={{ backgroundColor: color, padding: '2rem' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff',
              }}
            >
              <strong>${key}</strong>
              <div>
                <span>{color}</span>
              </div>
            </div>
          </div>
        )
      })}
      {listToast.map((toastItem, index) => {
        return (
          <Toast
            title={toastItem.title}
            description={toastItem.description}
            key={toastItem.id}
            variant="success"
          />
        )
      })}
    </ToastProvider>
  )
}
