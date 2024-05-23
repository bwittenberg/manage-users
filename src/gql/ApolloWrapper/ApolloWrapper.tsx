import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import { PropsWithChildren, useMemo } from 'react'

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new RestLink({
        uri: '/api',
        responseTransformer: async (response) => {
          const json = await response.json()
          if ('users' in json) {
            return Object.values(json.users)
          }
          return json
        }
      })
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
