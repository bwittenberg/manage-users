import { useCallback } from 'react'
import { updateUser } from './update'

export const useSetIsAdmin = ({ userId }: { userId: string }) => {
  return useCallback(
    (isAdmin: boolean) => {
      updateUser(userId, {
        isAdmin
      })
    },
    [userId]
  )
}
