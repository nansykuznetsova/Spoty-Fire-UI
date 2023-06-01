import React from "react";
import PropTypes from "prop-types";
import "./field.css";
import SearchIcon from "../svg/SearchIcon";
import CloseIcon from "../svg/CloseIcon";

export const Field = ({
  searchBar,
  label,
  value: initialValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  const updateValue = (value) => {
    if (onChange) {
      onChange(value);
    }
    setValue(value);
  };

  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  const handleClick = () => {
    updateValue("");
  };

  return (
    <div className="search">
      {searchBar && (
        <div className="mode-search-bar">
          <SearchIcon className="icon-search" />
        </div>
      )}
      <input
        type="textbox"
        className="input"
        placeholder={label}
        onChange={handleChange}
        value={value}
        {...props}
      />
      {value && (
        <button className="mode-close-icon" aria-label="Click to clear the field" onClick={handleClick}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  searchBar: PropTypes.bool,
};

Field.defaultProps = {
  label: "",
  value: "",
  searchBar: false,
  onChange: () => {},
  onClick: () => {},
};
