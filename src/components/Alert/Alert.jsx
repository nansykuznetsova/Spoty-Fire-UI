import React from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.css'
import { Button } from '../Button'

export const Alert = ({ status, text, ...props }) => {
  return (
    <div
      role="alert"
      className={status === 'success' ? styles.alert : `${styles.alert} ${styles.alertError}`}
      {...props}
    >
      {text}
    </div>
  )
}

Button.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  status: '',
  label: '',
}
