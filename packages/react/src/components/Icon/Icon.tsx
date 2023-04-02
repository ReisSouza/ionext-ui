import React, { ComponentProps, useEffect, useState } from 'react'
import { Slot } from '@radix-ui/react-slot'
import IcomoonReact from 'icomoon-react'
type IconProps = ComponentProps<typeof IcomoonReact> & {}

export const Icon: React.FC<IconProps> = ({ ...props }: IconProps) => {
  const [canShow, setCanShow] = useState(false)
  useEffect(() => {
    setCanShow(true)
  }, [])

  if (!canShow) return <></>

  return (
    <Slot>
      <IcomoonReact {...props} />
    </Slot>
  )
}
