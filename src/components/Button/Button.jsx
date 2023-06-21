import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const Button = ({ variant = 'primary', label, ...props }) => {
  return (
    <button type="button" className={[styles.button, styles[variant]].join(' ')} {...props}>
      {label}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
}
