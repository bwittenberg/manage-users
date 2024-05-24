import {
  Grid,
  Flex,
  Link as RadixLink,
  Button,
  Tooltip
} from '@radix-ui/themes'
import { PropsWithChildren, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { HomeIcon, PersonIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      columns={{ initial: '1', xs: 'auto 1fr' }}
      rows={{ initial: 'min-content auto', xs: '1' }}
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
    <Flex
      direction={{ initial: 'row', xs: 'column' }}
      gap="2"
      flexGrow="1"
      wrap="wrap"
    >
      <Flex
        direction={{ initial: 'row', xs: 'column' }}
        flexGrow="1"
        gap="2"
        wrap="wrap"
      >
        <NavLink to="/">
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to="/users">
          <PersonIcon />
          Users
        </NavLink>
      </Flex>
      <Flex direction={{ initial: 'row', xs: 'column' }} flexGrow="0" gap="2">
        <Tooltip content="Toggle Theme">
          <Button
            variant="outline"
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
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
    </Flex>
  )
}

export const Content = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}
