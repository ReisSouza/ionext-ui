// import React from 'react'
import { colors } from '@ionext-ui/tokens'

import { getContrast } from 'polished'
export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}
export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        onClick={() => copyTextToClipboard(color)}
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
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
