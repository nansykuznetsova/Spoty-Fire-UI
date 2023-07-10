import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.css'
import { ListItem } from './ListItem'

export const List = ({ list, label, onActionItemClick }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          title={item.name}
          artists={item.artists}
          album={item.album.name}
          img={item.album.images}
          label={label}
          onClick={onActionItemClick}
        >
          {item.label}
        </ListItem>
      ))}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
  onActionItemClick: PropTypes.func,
}

List.defaultProps = {
  list: [],
  label: '',
  onActionItemClick: () => {},
}
