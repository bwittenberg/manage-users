import * as Layout from 'components/Layout'
import { Tabs, Link } from '@radix-ui/themes'
import { Routes, Route } from 'react-router-dom'
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
              <Link>List</Link>
            </Tabs.Trigger>
            <Tabs.Trigger value="groups">
              <Link>Groups</Link>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={value}>{children}</Tabs.Content>
        </Tabs.Root>
      </Layout.Content>
    </Layout.Root>
  )
}

const List = () => {
  return <>Hello List</>
}

const Groups = () => {
  return <>Hello Groups</>
}
