import React from 'react'
import * as S from './styles'
import iconSet from '../../assets/icons.json'
import { CSS } from '../../types/css'

type IconProps = {
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
      css={{ fill: color }}
      className={className}
      iconSet={iconSet}
      size={size}
      icon={icon}
    />
  )
}
