import { Grid, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <Grid rows="50px 1fr" columns="1">
      {children}
    </Grid>
  )
}

export const Nav = () => {
  return (
    <Flex>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </Flex>
  )
}

export const Content = ({ children }: { children: ReactNode }) => {
  return <Flex>{children}</Flex>
}
