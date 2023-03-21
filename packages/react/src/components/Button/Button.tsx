import React, { ComponentProps, ElementType, ReactNode, useEffect } from 'react'

import * as S from './styles'
import { Icon } from '../Icon/Icon'

export type ButtonProps = ComponentProps<typeof S.Button> & {
  children: ReactNode
  iconLeft: string
  iconRight: string
  isLoading: boolean
  disabled: boolean
  as?: ElementType
}

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  disabled = false,
  size,
  ...rest
}: ButtonProps) => {
  const asSizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  }[size as 'small' | 'medium' | 'large']

  useEffect(() => {
    const elementRipple: HTMLButtonElement | null =
      document.querySelector('.animation-ripple')

    if (elementRipple) {
      elementRipple.onclick = ({ pageX, pageY }) => {
        const x =
          ((pageX - elementRipple.offsetLeft) * 100) / elementRipple.offsetWidth

        const y =
          ((pageY - elementRipple.offsetTop) * 100) / elementRipple.offsetHeight

        const ripple = document.createElement('span')
        const rippleCollor = elementRipple.dataset.ripple || '#212129'

        ripple.classList.add('ripple-effect')
        ripple.style.background = rippleCollor

        elementRipple.appendChild(ripple)

        ripple.style.left = x + '%'
        ripple.style.top = y + '%'

        setTimeout(() => {
          ripple.remove()
        }, 700)
      }
    }
  }, [])

  return (
    <S.Button
      data-ripple="#FFF"
      className="animation-ripple"
      disabled={disabled}
      size={size}
      hasIcon={!!iconLeft || !!iconRight}
      {...rest}
    >
      {iconLeft && <Icon icon={iconLeft} size={asSizeMap} />}
      {children}
      {iconRight && <Icon icon={iconRight} size={asSizeMap} />}
    </S.Button>
  )
}
