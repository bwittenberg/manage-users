import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Routes } from './Routes'

describe('App', () => {
  test('should render /', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    )

    expect(await screen.findByText('Hello World')).toBeInTheDocument()
  })

  test('should render /users list', async () => {
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes />
      </MemoryRouter>
    )

    expect(await screen.findByText('Hello List')).toBeInTheDocument()
  })

  test('should render /users/groups', async () => {
    render(
      <MemoryRouter initialEntries={['/users/groups']}>
        <Routes />
      </MemoryRouter>
    )

    expect(await screen.findByText('Hello Groups')).toBeInTheDocument()
  })
})
