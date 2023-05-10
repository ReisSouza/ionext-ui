import { VariantProps } from '@stitches/react'
import React from 'react'

import * as S from './styles'
import { User } from 'phosphor-react'

export type AvatarProps = VariantProps<typeof S.ContainerAvatar> & {
  src?: string
  icon?: string
  title?: string
  arialLabel?: string
  fallbackName?: string
  disabledHover?: boolean
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  icon,
  title,
  onClick,
  arialLabel,
  fallbackName,
  disabledHover = false,
  ...rest
}: AvatarProps) => {
  const getInitials = (userName: string) => {
    const words = userName.split(' ')
    const lastIndex = words.length - 1

    return `${words[0][0]}${
      words.length === 1 ? words[0][1] : words[lastIndex][0] || words[0][1]
    }`.toUpperCase()
  }

  return (
    <S.ContainerAvatar
      {...rest}
      hasImage={!!src}
      aria-label={arialLabel}
      data-disabledHover={disabledHover}
    >
      <S.ImageAvatar src={src} alt={`Foto do usuário ${fallbackName}`} />
      <S.fallbackAvatar delayMs={600} size={rest.size}>
        {!src && !icon && !fallbackName ? (
          <User weight="fill" />
        ) : (
          icon || getInitials(fallbackName || '')
        )}
      </S.fallbackAvatar>
    </S.ContainerAvatar>
  )
}
