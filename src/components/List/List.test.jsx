import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { List } from './List'

describe('List', () => {
  const trackinfo = [
    {
      id: 'id1',
      name: 'trackName1',
      artists: [{ name: 'artist1' }],
      album: {
        name: 'albumName1',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d',
          height: 40,
          width: 40,
        },
      },
    },
    {
      id: 'id2',
      name: 'trackName2',
      artists: [{ name: 'artist2' }],
      album: {
        name: 'albumName2',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca',
          height: 40,
          width: 40,
        },
      },
    },
    {
      id: 'id3',
      name: 'trackName3',
      artists: [{ name: 'artist3' }, { name: 'artist3' }],
      album: {
        name: 'albumName3',
        images: {
          url: 'https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e',
          height: 40,
          width: 40,
        },
      },
    },
  ]

  it('should show track image, track name, artists and album ', () => {
    // 1. ARRANGE
    render(<List list={trackinfo} />)

    // 3. ASSERT
    expect(screen.getByText('trackName1')).toBeInTheDocument()
    expect(screen.getByText('artist1 | albumName1')).toBeInTheDocument()
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument()
  })

  it('should show Add button', () => {
    // 1. ARRANGE
    render(<List list={trackinfo} label="Add" />)

    // 3. ASSERT
    expect(screen.getAllByText('Add')[0]).toBeInTheDocument()
  })

  it('should show Remove button', () => {
    // 1. ARRANGE
    render(<List list={trackinfo} label="Remove" />)

    // 3. ASSERT
    expect(screen.getAllByText('Remove')[0]).toBeInTheDocument()
  })
})
