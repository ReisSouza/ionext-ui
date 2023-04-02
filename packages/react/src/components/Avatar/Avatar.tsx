import { ComponentProps } from '@stitches/react'
import React from 'react'

import * as S from './styles'

export type AvatarProps = ComponentProps<typeof S.ContainerAvatar> & {
  src?: string
  fallbackName?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  variants = 'primary',
  size = 'medium',
  fallbackName = 'Reis Souza',
  src,
}: AvatarProps) => {
  const getInitials = (userName: string) => {
    const words = userName.split(' ')
    const lastIndex = words.length - 1

    return `${words[0][0]}${
      words.length === 1 ? words[0][1] : words[lastIndex][0] || words[0][1]
    }`.toUpperCase()
  }
  return (
    <S.ContainerAvatar hasImage={!!src} size={size} variants={variants}>
      <S.ImageAvatar src={src} alt={`Foto do usuário ${fallbackName}`} />
      <S.fallbackAvatar delayMs={600}>
        {getInitials(fallbackName || '')}
      </S.fallbackAvatar>
    </S.ContainerAvatar>
  )
}
