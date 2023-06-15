import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import SpotifyLogo from '../../svg/SpotifyLogo'

describe('Header', () => {
  const customLogo = <SpotifyLogo />
  const userName = {
    user: {
      name: 'Jane Doe',
    },
  }

  it('should show the string in logo', () => {
    // 1. ARRANGE
    render(<Header logo="string" />)

    // 3. ASSERT
    expect(screen.getByText('string')).toBeInTheDocument()
  })

  it('should show the custom logo', () => {
    // 1. ARRANGE
    render(<Header logo={customLogo} />)

    // 3. ASSERT
    expect(screen.queryByTitle('custom-logo')).toBeInTheDocument()
  })

  it('should render user name and the log out button', () => {
    // 1. ARRANGE
    render(<Header user={userName} />)

    // 3. ASSERT
    expect(screen.getByTitle('Welcoming user')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })

  it('should render the log in button', () => {
    // 1. ARRANGE
    render(<Header />)

    // 3. ASSERT
    expect(screen.getByText('Log in')).toBeInTheDocument()
  })
})
