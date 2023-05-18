import React from "react";
import PropTypes from "prop-types";
import "./field.css";
import SearchIcon from "../svg/SearchIcon";
import CloseIcon from "../svg/CloseIcon";

export const Field = ({ 
  searchBar, 
  label, 
  value,
  onChange,
  onClick,
  ...props
}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const modeSearchBar = searchBar ? "modeSearchBar" : "iconWrapperHidden";
  const modeCloseIcon = value ? "modeCloseIcon" : "iconWrapperHidden";
  return (
    <div className="search">
      <div className={modeSearchBar}>
        <SearchIcon className="iconSearch"/>
      </div>
      <input
        className="input"
        placeholder={label}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <button className={modeCloseIcon} onClick={onClick}>
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
