import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Layout } from '../Layout'

vi.mock('react-router', () => ({ Outlet: () => <div data-testid="outlet-child">child</div> }))

describe('Layout', () => {
  it('renders layout container and outlet child', () => {
    render(<Layout />)

    const container = document.querySelector('.min-h-screen')
    expect(container).toBeInTheDocument()

    const child = screen.getByTestId('outlet-child')
    expect(child).toHaveTextContent('child')
  })
})
