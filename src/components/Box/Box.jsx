import React from 'react'
import PropTypes from 'prop-types'
import styles from './Box.module.css'

export const Box = ({ backgroundColor, primary, ...props }) => {
  return (
    <div
      className={[styles.container, !primary ? styles.containerSecondary : null].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {props.children}
    </div>
  )
}

Box.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
}

Box.defaultProps = {
  backgroundColor: null,
  primary: true,
}
