import React from 'react'

import * as S from './styles'
import { Button, Heading } from '@ionext-ui/react'
import { useRouter } from 'next/router'

export type ActiveAccountProps = {}

export const ActiveAccount: React.FC<ActiveAccountProps> = ({
  ...rest
}: ActiveAccountProps) => {
  const { push } = useRouter()
  return (
    <S.ActiveAccountContainer>
      <Heading color="secondary" align="center">
        Conta validada com sucesso!
      </Heading>
      <Button fullWidth onClick={() => push('/auth/login')}>
        Começar agora!
      </Button>
    </S.ActiveAccountContainer>
  )
}
