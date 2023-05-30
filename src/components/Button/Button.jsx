import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ variant = "primary", label, ...props }) => {
  return (
    <button
      type="button"
      className={`button ${variant}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
};
