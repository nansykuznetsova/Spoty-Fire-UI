import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.css'
import { ListItem } from './ListItem'

export const List = ({ list, label }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ListItem
          key={item.id}
          title={item.name}
          artists={item.artists}
          album={item.album.name}
          img={item.album.images}
          label={label}
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
}

List.defaultProps = {
  list: [],
  label: '',
}
