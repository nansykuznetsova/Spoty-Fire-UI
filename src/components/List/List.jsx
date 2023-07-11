import React from 'react'
import styles from './List.module.css'

export const List = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>
}

List.propTypes = {}

List.defaultProps = {}
