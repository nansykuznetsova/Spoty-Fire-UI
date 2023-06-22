import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field } from './Field'

describe('Field', () => {
  it('should update the input value when typing', () => {
    // 1. ARRANGE
    render(<Field />)

    // 2. ACT
    userEvent.type(screen.getByLabelText('Search'), 'Hello,World!')

    // 3. ASSERT
    expect(screen.getByLabelText('Search')).toHaveValue('Hello,World!')
  })

  it('should hide the search icon depending of the type prop', () => {
    // 1. ARRANGE
    render(<Field type="text" />)

    // 3. ASSERT
    expect(screen.queryByTitle('search-icon')).not.toBeInTheDocument()
  })

  it('should show the search icon depending of the type prop', () => {
    // 1. ARRANGE
    render(<Field type="search" />)

    // 3. ASSERT
    expect(screen.queryByTitle('search-icon')).toBeInTheDocument()
  })

  it('should show the input with value and the clear button', () => {
    // 1. ARRANGE
    render(<Field value="test" />)

    // 3. ASSERT
    expect(screen.getByLabelText('Search')).toHaveValue('test')
    expect(screen.queryByTitle('close-icon')).toBeInTheDocument()
  })

  it('should hide the clear button when there is not a value', async () => {
    // 1. ARRANGE
    render(<Field value="" />)

    // 3. ASSERT
    expect(screen.queryByTitle('close-icon')).not.toBeInTheDocument()
  })

  it('should clear the input and remove the clear button', async () => {
    // 1. ARRANGE
    render(<Field value="test" />)

    // 2. ACT
    await userEvent.click(screen.getByLabelText('Click to clear the field'))

    // 3. ASSERT
    expect(screen.getByLabelText('Search')).toHaveValue('')
    expect(screen.queryByTitle('close-icon')).not.toBeInTheDocument()
  })
})
