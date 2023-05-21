import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import {
  Callout,
  Arrow,
  CalloutHeading,
  CalloutText,
  CaretDown,
  ListItemHeading,
  ListItemLink,
  ListItemText,
  ViewportPosition,
  List,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './styles'

interface ListItemProps extends React.HTMLProps<HTMLAnchorElement> {
  title: string
}
const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuPrimitive.Link asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemText>{children}</ListItemText>
        </ListItemLink>
      </NavigationMenuPrimitive.Link>
    </li>
  ),
)
ListItem.displayName = 'ListItem'

export const NavigationMenu = () => {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <List>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenuPrimitive.Link asChild>
                  <Callout href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <CalloutHeading>Radix Primitives</CalloutHeading>
                    <CalloutText>
                      Unstyled, accessible components for React.
                    </CalloutText>
                  </Callout>
                </NavigationMenuPrimitive.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger>
            Overview <CaretDown aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List layout="two">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuLink href="https://github.com/radix-ui">
            Github
          </NavigationMenuLink>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  )
}
