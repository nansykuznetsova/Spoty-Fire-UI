import React from 'react';
import PropTypes from 'prop-types';
import './select.css';
import ArrowCloseIcon from '../svg/ArrowCloseIcon';
import ArrowOpenIcon from '../svg/ArrowOpenIcon';
import CheckIcon from '../svg/CheckIcon';

export const Select = ({ label, list, onChange }) => {
  const [display, setDisplay] = React.useState("none");
  const [currentItem, setCurrentItem] = React.useState({ label });
  const [arrow, setArrow] = React.useState(false);

  React.useEffect(() => {
    if (display === "none") {
      setArrow(false);
    } else {
      setArrow(true);
    }
  }, [display])

  const handleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }

  const handleClickOption = (item) => {
    setCurrentItem({ ...item });
    onChange(item);
    setDisplay("none");
  }

  return (
    <React.Fragment>
      <div className="selectTab">
        <button 
          type="button" 
          className="buttonSelect"
          onClick={handleClick}
        >
          {currentItem.label}
          {arrow ? <ArrowOpenIcon /> : <ArrowCloseIcon />}
        </button>
      </div>
      <ul className="options" style={{ display }}>
        {list.map((item) => (
          <li key={item.id} className="optionsItem">
            <button 
              type="button"
              className={["optionsButton", (item.id === currentItem.id ? "optionsButtonCurrent" : null)].join(" ")}
              onClick={() => handleClickOption(item)}
            >
             {item.label}
             {item.id === currentItem.id ? <CheckIcon /> : null}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  label: "",
  list: [],
  onChange: () => {},
};
