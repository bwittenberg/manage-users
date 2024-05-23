import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'components/Routes'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { ApolloWrapper } from 'gql/ApolloWrapper'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <ApolloWrapper>
      <Theme>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Theme>
    </ApolloWrapper>
  </StrictMode>
)
