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

  const modeSearchBar = searchBar ? "mode-search-bar" : "icon-wrapper-hidden";
  const modeCloseIcon = value ? "mode-close-icon" : "icon-wrapper-hidden";
  return (
    <div className="search">
      <div className={modeSearchBar}>
        <SearchIcon className="icon-search" />
      </div>
      <input
        className="input"
        placeholder={label}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <button className={modeCloseIcon} onClick={handleClick}>
        <CloseIcon />
      </button>
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
