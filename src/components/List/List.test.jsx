import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { List } from './List'
import { ListItem } from './ListItem'
import { itemsList } from '../../../__mocks__/itemsList'

describe('List', () => {
  const actionCallbackMock = jest.fn()
  const setup = () => {
    render(
      <List>
        {itemsList.map((item) => (
          <ListItem
            actionLabel="Add"
            album={item.album.name}
            artists={item.artists}
            img={item.album.images}
            item={item}
            key={item.id}
            onClick={actionCallbackMock}
            title={item.name}
          >
            {item.label}
          </ListItem>
        ))}
      </List>,
    )
  }

  it('should show track image, track name, artists and album ', () => {
    // 1. ARRANGE
    setup()

    // 3. ASSERT
    expect(screen.getByText('trackName1')).toBeInTheDocument()
    expect(screen.getByText('artist1 | albumName1')).toBeInTheDocument()
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument()
  })

  it('should show Add button', async () => {
    // 1. ARRANGE
    setup()
    const addButton = screen.getAllByText('Add')[0]

    // 2. ACT
    await userEvent.click(addButton)

    // 3. ASSERT
    expect(actionCallbackMock).toBeCalledTimes(1)
    expect(actionCallbackMock).toBeCalledWith(itemsList[0])
  })
})
