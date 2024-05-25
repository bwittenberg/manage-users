import { Table, Avatar, Checkbox } from '@radix-ui/themes'
import { useCallback, useRef } from 'react'
import { useSetIsAdmin } from 'gql/User'
import { ShiftRightTransition } from '../../components/ShiftRightTransition'
import { HighlightTransition } from 'components/HighlightTransition'
import { useDelayedUpdate } from 'hooks/useDelayedUpdate'

type Props = {
  id: string
  isAdmin: boolean
  first: string
  last: string
  role: string
  photo: string
}

export const Row = ({ id, isAdmin, first, last, role, photo }: Props) => {
  const rowRef = useRef<HTMLTableRowElement | null>(null)
  const ref = useRef<HTMLImageElement | null>(null)
  const { tempValue: tempIsAdmin, setTempValue: setTempIsAdmin } =
    useDelayedUpdate({
      onPersist: useSetIsAdmin({ userId: id })
    })
  const handleOnClickIsAdminCheckbox = useCallback(
    () => setTempIsAdmin(!isAdmin),
    [setTempIsAdmin, isAdmin]
  )

  const fullName = `${first} ${last}`

  return (
    <HighlightTransition nodeRef={rowRef} in={tempIsAdmin !== null}>
      <Table.Row ref={rowRef} aria-label={fullName}>
        <Table.Cell>
          <ShiftRightTransition nodeRef={ref} in={tempIsAdmin !== null}>
            <Avatar
              ref={ref}
              src={photo}
              fallback={first}
              alt={`Avatar for ${fullName}`}
            />
          </ShiftRightTransition>
        </Table.Cell>
        <Table.RowHeaderCell>{first}</Table.RowHeaderCell>
        <Table.Cell>{last}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell>
          <Checkbox
            checked={tempIsAdmin ?? isAdmin}
            onClick={handleOnClickIsAdminCheckbox}
          />
        </Table.Cell>
      </Table.Row>
    </HighlightTransition>
  )
}
