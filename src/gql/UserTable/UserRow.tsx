import { Table, Avatar, Checkbox } from '@radix-ui/themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useToggleIsAdmin } from 'gql/User'
import { ShiftRightTransition } from '../../components/ShiftRightTransition'
import { HighlightTransition } from 'components/HighlightTransition'

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
  const toggleIsAdmin = useToggleIsAdmin({
    userId: id,
    isAdmin
  })

  const [tempIsAdmin, setTempIsAdmin] = useState<boolean | null>(null)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const handleOnToggleAdmin = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
    setTempIsAdmin(!isAdmin)
    timeoutIdRef.current = setTimeout(() => {
      toggleIsAdmin()
      timeoutIdRef.current = setTimeout(() => {
        setTempIsAdmin(null)
      }, 2000)
    }, 1000)
  }, [isAdmin, toggleIsAdmin])

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
  }, [])

  return (
    <HighlightTransition nodeRef={rowRef} in={tempIsAdmin !== null}>
      <Table.Row ref={rowRef}>
        <Table.RowHeaderCell>
          <ShiftRightTransition nodeRef={ref} in={tempIsAdmin !== null}>
            <Avatar ref={ref} src={photo} fallback={first} />
          </ShiftRightTransition>
        </Table.RowHeaderCell>
        <Table.Cell>{first}</Table.Cell>
        <Table.Cell>{last}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell>
          <Checkbox
            checked={tempIsAdmin ?? isAdmin}
            onClick={handleOnToggleAdmin}
          />
        </Table.Cell>
      </Table.Row>
    </HighlightTransition>
  )
}
