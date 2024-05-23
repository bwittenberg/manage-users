import { Table, Avatar, Checkbox } from '@radix-ui/themes'
import { useRef } from 'react'
import { useToggleIsAdmin } from 'gql/User'
import { ShiftRightTransition } from '../../components/ShiftRightTransition'

type Props = {
  id: string
  isAdmin: boolean
  first: string
  last: string
  role: string
  photo: string
}

export const Row = ({ id, isAdmin, first, last, role, photo }: Props) => {
  const toggleIsAdmin = useToggleIsAdmin({
    userId: id,
    isAdmin: isAdmin
  })
  const ref = useRef<HTMLTableRowElement | null>(null)
  return (
    <ShiftRightTransition nodeRef={ref} in={isAdmin}>
      <Table.Row ref={ref}>
        <Table.RowHeaderCell>
          <Avatar src={photo} fallback={first} />
        </Table.RowHeaderCell>
        <Table.Cell>{first}</Table.Cell>
        <Table.Cell>{last}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell>
          <Checkbox checked={isAdmin} onClick={toggleIsAdmin} />
        </Table.Cell>
      </Table.Row>
    </ShiftRightTransition>
  )
}
