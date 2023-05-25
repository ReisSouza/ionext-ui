import { Box, BoxProps, Paragraph } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    variant: 'primary',
    hasBorder: false,
    children: (
      <>
        <Paragraph>Testando o elemento Box</Paragraph>
      </>
    ),
  },
  argTypes: {},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}

export const PrimaryWithBorder: StoryObj<BoxProps> = {
  args: {
    variant: 'primary',
    hasBorder: 'true',
  },
}

export const SecondaryWithBorder: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    hasBorder: 'true',
  },
}

export const CustomElement: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    as: 'form',
    children:
      'Especione o console, e veja que o elemento renderizado foi um form',
  },
}

export const elevationHover: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    elevation: 'hover',
  },
}

export const elevationEmphases: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    elevation: 'emphases',
  },
}

export const elevationLevel1: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    elevation: 'level-1',
  },
}

export const elevationLevel2: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    elevation: 'level-2',
  },
}

export const elevationLevel3: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    elevation: 'level-3',
  },
}
