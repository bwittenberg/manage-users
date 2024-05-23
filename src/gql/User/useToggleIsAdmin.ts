import { useCallback } from 'react'
import { updateUser } from './update'

export const useToggleIsAdmin = ({
  userId,
  isAdmin
}: {
  userId: string
  isAdmin: boolean
}) => {
  return useCallback(() => {
    updateUser(userId, {
      isAdmin: !isAdmin
    })
  }, [isAdmin, userId])
}
