type RestUserSchema = {
  first: string
  last: string
  role: string
  photo: string
}

export const transformRestResponse = (users: RestUserSchema[]) => {
  return Object.entries(users).map(([key, value]) => ({
    ...value,
    id: key
  }))
}
