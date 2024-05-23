import { gql, useQuery } from '@apollo/client'
import * as Layout from 'components/Layout'
import { Tabs, Link as RadixLink, Table, Avatar } from '@radix-ui/themes'
import { Routes, Route, Link } from 'react-router-dom'
import { PropsWithChildren } from 'react'

export const Users = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TabsLayout value="list">
            <List />
          </TabsLayout>
        }
      />
      <Route
        path="/groups"
        element={
          <TabsLayout value="groups">
            <Groups />
          </TabsLayout>
        }
      />
    </Routes>
  )
}

type TabsLayoutProps = PropsWithChildren<{
  value: 'list' | 'groups'
}>

const TabsLayout = ({ value, children }: TabsLayoutProps) => {
  return (
    <Layout.Root>
      <Layout.Nav />
      <Layout.Content>
        <Tabs.Root value={value}>
          <Tabs.List>
            <Tabs.Trigger value="list">
              <RadixLink asChild>
                <Link to="/users">List</Link>
              </RadixLink>
            </Tabs.Trigger>
            <Tabs.Trigger value="groups">
              <RadixLink asChild>
                <Link to="/users/groups">Groups</Link>
              </RadixLink>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={value}>{children}</Tabs.Content>
        </Tabs.Root>
      </Layout.Content>
    </Layout.Root>
  )
}

type User = {
  first: string
  last: string
  role: string
  photo: string
}

const UsersListQuery = gql(/* GraphQL */ `
  query UsersListQuery {
    users @rest(type: "User", path: "/users") {
      first
      last
      role
      photo
    }
  }
`)

const List = () => {
  const { data } = useQuery<{ users: User[] }>(UsersListQuery)

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>First</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Last</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.users.map((user, index) => {
          return (
            <Table.Row key={index}>
              <Table.RowHeaderCell>
                <Avatar src={user.photo} fallback={user.first} />
              </Table.RowHeaderCell>
              <Table.Cell>{user.first}</Table.Cell>
              <Table.Cell>{user.last}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}

const Groups = () => {
  return <>Hello Groups</>
}
