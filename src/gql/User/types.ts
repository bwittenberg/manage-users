import { transformRestResponse } from './transformRestResponse'

export type LocalOnlyState = {
  isAdmin: boolean
}

/**
 * @description Definition of user type
 */
export type User = ReturnType<typeof transformRestResponse>[number] &
  LocalOnlyState
