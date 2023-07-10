import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.css'
import { Button } from '../Button/Button'

export const ListItem = ({ item, label, title, artists, album, img, onClick }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.item}>
        <img
          role="img"
          aria-label="Cover album image"
          draggable="false"
          loading="eager"
          src={img.url}
          width="40"
          height="40"
          className={styles.imgItem}
        />
        <div className={styles.nameItem}>
          {title}
          <span title="artistsInfo" className={styles.spanColor}>
            {artists.map((artist) => artist.name).join(', ')} | {album}
          </span>
        </div>
      </div>
      {label ? (
        <Button
          role="button"
          label={label}
          variant="outlined"
          onClick={() => {
            onClick(item)
          }}
        />
      ) : null}
    </li>
  )
}

ListItem.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  artists: PropTypes.array,
  album: PropTypes.string,
  img: PropTypes.object,
  onClick: PropTypes.func,
}

ListItem.defaultProps = {
  title: '',
  artists: [],
  album: '',
  img: {},
  onClick: () => {},
}
