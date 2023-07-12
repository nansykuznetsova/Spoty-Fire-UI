import React from 'react'
import { render, screen } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('should render the label text', () => {
    // 1. ARRANGE
    render(<Alert status="success" text="Hello" />)

    // 2. ASSERT
    expect(screen.getByRole('alert')).toHaveTextContent('Hello')
  })
})
