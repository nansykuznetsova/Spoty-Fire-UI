import { List, ListItem } from '../components/List'
import { itemsList } from '../../__mocks__/itemsList'

export default {
  title: 'List',
  component: List,
  tags: ['autodocs'],
}

export const ListTab = {
  args: {
    children: (
      <>
        {itemsList.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            title={item.name}
            artists={item.artists}
            album={item.album.name}
            img={item.album.images}
            onClick={(item) => {
              console.log('Click on item action', item)
            }}
          >
            {item.label}
          </ListItem>
        ))}
      </>
    ),
  },
}

export const ListTabAddButton = {
  args: {
    children: (
      <>
        {itemsList.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            title={item.name}
            artists={item.artists}
            album={item.album.name}
            img={item.album.images}
            actionLabel="Add"
            onClick={(item) => {
              console.log('Click on item action', item)
            }}
          >
            {item.label}
          </ListItem>
        ))}
      </>
    ),
  },
}

export const ListTabRemoveButton = {
  args: {
    children: (
      <>
        {itemsList.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            title={item.name}
            artists={item.artists}
            album={item.album.name}
            img={item.album.images}
            actionLabel="Remove"
            onClick={(item) => {
              console.log('Click on item action', item)
            }}
          >
            {item.label}
          </ListItem>
        ))}
      </>
    ),
  },
}
