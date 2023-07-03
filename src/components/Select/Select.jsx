import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import ArrowCloseIcon from '../../svg/ArrowCloseIcon'
import ArrowOpenIcon from '../../svg/ArrowOpenIcon'
import CheckIcon from '../../svg/CheckIcon'

export const Select = ({ label, options, onChange }) => {
  const [display, setDisplay] = React.useState(false)
  const [currentItem, setCurrentItem] = React.useState({ label })
  const [arrow, setArrow] = React.useState(false)

  React.useEffect(() => {
    if (display) {
      setArrow(true)
    } else {
      setArrow(false)
    }
  }, [display])

  const handleClick = () => {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  const handleClickOption = (item) => {
    setCurrentItem({ ...item })
    onChange(item)
    setDisplay(false)
  }

  return (
    <React.Fragment>
      <div className={styles.selectTab}>
        <button type="button" className={styles.buttonSelect} onClick={handleClick}>
          {currentItem.name}
          {arrow ? <ArrowOpenIcon /> : <ArrowCloseIcon />}
        </button>
      </div>
      {display && options.length && (
        <ul className={styles.select} role="listbox">
          {options.map((item) => (
            <li
              key={item.id}
              className={styles.option}
              role="option"
              aria-selected={item.id === currentItem.id}
            >
              <button
                type="button"
                className={[
                  styles.optionsButton,
                  item.id === currentItem.id ? styles.optionsButtonCurrent : null,
                ].join(' ')}
                onClick={() => handleClickOption(item)}
              >
                {item.label}
                {item.id === currentItem.id ? <CheckIcon /> : null}
              </button>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  label: '',
  options: [],
  onChange: () => {},
}
