import {
  Grid,
  Flex,
  Link as RadixLink,
  Button,
  Tooltip,
  ScrollArea
} from '@radix-ui/themes'
import { PropsWithChildren, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { HomeIcon, PersonIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      columns={{ initial: '1', xs: 'max-content 1fr' }}
      rows="auto"
      gap="2"
      p="2"
      height="100%"
    >
      {children}
    </Grid>
  )
}

const NavLink = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  const match = useMatch(`${to}/*`)
  return (
    <RadixLink
      asChild
      style={{ ...(match ? { backgroundColor: 'var(--accent-5)' } : {}) }}
    >
      <Button variant="surface" asChild>
        <Link to={to}>{children}</Link>
      </Button>
    </RadixLink>
  )
}

export const Nav = () => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Flex direction="column" gap="2">
      <NavLink to="/">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to="/users">
        <PersonIcon />
        Users
      </NavLink>
      <Flex flexGrow="1" />
      <Tooltip content="Toggle Theme">
        <Button
          variant="outline"
          onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
          {resolvedTheme === 'light' ? (
            <>
              <SunIcon />
              Light
            </>
          ) : (
            <>
              <MoonIcon />
              Dark
            </>
          )}
        </Button>
      </Tooltip>
    </Flex>
  )
}

export const Content = ({ children }: { children: ReactNode }) => {
  return <ScrollArea>{children}</ScrollArea>
}
