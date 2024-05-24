import * as Layout from 'components/Layout'
import { Flex, TabNav } from '@radix-ui/themes'
import { Routes, Route, Link } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { UserTable } from 'gql/UserTable'

export const Users = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TabsLayout activeTab="list">
            <UserTable />
          </TabsLayout>
        }
      />
      <Route
        path="/groups"
        element={
          <TabsLayout activeTab="groups">
            <UserTable sortFn={(a, b) => (a.isAdmin && !b.isAdmin ? -1 : 1)} />
          </TabsLayout>
        }
      />
    </Routes>
  )
}

type TabsLayoutProps = PropsWithChildren<{ activeTab: 'list' | 'groups' }>

const TabsLayout = ({ children, activeTab }: TabsLayoutProps) => {
  return (
    <Layout.Root>
      <Layout.Nav />
      <Layout.Content>
        <Flex direction="column">
          <TabNav.Root>
            <TabNav.Link asChild active={activeTab === 'list'}>
              <Link to="/users">List</Link>
            </TabNav.Link>
            <TabNav.Link asChild active={activeTab === 'groups'}>
              <Link to="/users/groups">Groups</Link>
            </TabNav.Link>
          </TabNav.Root>
          {children}
        </Flex>
      </Layout.Content>
    </Layout.Root>
  )
}
