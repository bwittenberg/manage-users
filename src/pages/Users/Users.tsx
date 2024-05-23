import * as Layout from 'components/Layout'
import { Tabs, Link as RadixLink } from '@radix-ui/themes'
import { Routes, Route, Link } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { UserTable } from 'gql/UserTable'

export const Users = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TabsLayout value="list">
            <UserTable />
          </TabsLayout>
        }
      />
      <Route
        path="/groups"
        element={
          <TabsLayout value="groups">
            <UserTable sortFn={(a, b) => (a.isAdmin && !b.isAdmin ? -1 : 1)} />
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
