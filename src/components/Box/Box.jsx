import React from "react";
import PropTypes from 'prop-types';
import './box.css';

export const Box = ({backgroundColor, primary, label, ...props }) => {
  const mode = primary ? 'container-primary' : 'container-secondary';
  return (
    <div
      className={['container', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
        {label}
    </div>
  );
};

Box.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Box.defaultProps = {
  backgroundColor: null,
  primary: false,
};
