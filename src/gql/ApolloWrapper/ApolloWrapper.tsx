import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import { transformRestResponse, userReactiveVar } from 'gql/User'
import { PropsWithChildren, useMemo } from 'react'

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: {
          User: {
            fields: {
              isAdmin: {
                read: (existing, { readField }) => {
                  const userId = readField('id') as string
                  return userReactiveVar()[userId]?.isAdmin ?? false
                }
              }
            }
          }
        }
      }),
      link: new RestLink({
        uri: '/api',
        responseTransformer: async (response) => {
          const json = await response.json()
          if ('users' in json) {
            return transformRestResponse(json.users)
          }
          return json
        }
      })
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
