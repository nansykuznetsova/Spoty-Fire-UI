import React from 'react'
import PropTypes from 'prop-types'
import styles from './Field.module.css'
import SearchIcon from '../../../public/svg/SearchIcon'
import CloseIcon from '../../../public/svg/CloseIcon'

export const Field = ({ type, label, value: initialValue, onChange, ...props }) => {
  const [value, setValue] = React.useState(initialValue)

  const updateValue = (value) => {
    if (onChange) {
      onChange(value)
    }
    setValue(value)
  }

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  const handleClick = () => {
    updateValue('')
  }

  return (
    <div className={styles.search}>
      {type === 'search' && (
        <div className={styles.modeSearchBar}>
          <SearchIcon className={styles.iconSearch} />
        </div>
      )}
      <input
        type={type}
        className={styles.input}
        aria-label="Search"
        placeholder={label}
        onChange={handleChange}
        value={value}
        {...props}
      />
      {value && (
        <button
          className={styles.modeCloseIcon}
          aria-label="Click to clear the field"
          onClick={handleClick}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
}

Field.defaultProps = {
  label: '',
  value: '',
  type: '',
  onChange: () => {},
  onClick: () => {},
}
