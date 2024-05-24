import { TypedDocumentNode, gql, useQuery } from '@apollo/client'
import { Table } from '@radix-ui/themes'
import { Row } from './UserRow'
import type { User } from 'gql/User'
import { useMemo } from 'react'
import { SkeletonRow } from 'components/Table/SkeletonRow'

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

type Props = {
  sortFn?: (a: User, b: User) => number
}

const defaultSortFn: Props['sortFn'] = (a, b) => a.last.localeCompare(b.last)

export const UserTable = ({ sortFn = defaultSortFn }: Props) => {
  const { data, loading } = useQuery(UsersListQuery)

  const sortedRows = useMemo(
    () => data?.users.toSorted(sortFn) ?? [],
    [data?.users, sortFn]
  )

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
        {loading ? (
          <>
            {new Array(3).fill(3).map((v, index) => (
              <SkeletonRow key={index} cellCount={5} />
            ))}
          </>
        ) : (
          sortedRows.map((user) => {
            return <Row key={user.id} {...user} />
          })
        )}
      </Table.Body>
    </Table.Root>
  )
}
