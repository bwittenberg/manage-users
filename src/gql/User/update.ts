import { makeVar } from '@apollo/client'
import { LocalOnlyState } from './types'

export const userReactiveVar = makeVar<Record<string, LocalOnlyState>>({})

export const updateUser = (id: string, updates: Partial<LocalOnlyState>) => {
  const data = userReactiveVar()
  data[id] = {
    ...data[id],
    ...updates
  }
  userReactiveVar({
    ...data
  })
}
