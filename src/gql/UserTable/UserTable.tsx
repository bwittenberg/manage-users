import { TypedDocumentNode, gql, useQuery } from '@apollo/client'
import { Table } from '@radix-ui/themes'
import { Row } from './UserRow'
import type { User } from 'gql/User'

const UsersListQuery = gql(/* GraphQL */ `
  query UsersListQuery {
    users @rest(type: "User", path: "/users") {
      id
      first
      last
      role
      photo
      isAdmin @client
    }
  }
`) as TypedDocumentNode<{ users: User[] }>

export const UserTable = () => {
  const { data } = useQuery(UsersListQuery)

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Avatar</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>First</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Last</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Admin</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.users.map((user) => {
          return <Row key={user.id} {...user} />
        })}
      </Table.Body>
    </Table.Root>
  )
}
