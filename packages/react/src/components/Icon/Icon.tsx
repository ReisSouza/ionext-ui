import React, { ComponentProps } from 'react'
import * as S from './styles'
import iconSet from '../../assets/icons.json'
import { CSS } from '../../types/css'

type IconProps = ComponentProps<typeof S.Icon> & {
  color?: CSS['color']
  size: string | number
  icon: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size,
  className,
  color,
}: IconProps) => {
  return (
    <S.Icon
      css={{ fill: color || 'inherit' }}
      className={className}
      iconSet={iconSet}
      size={size}
      icon={icon}
    />
  )
}
