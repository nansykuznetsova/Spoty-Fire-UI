import React from "react";
import PropTypes from 'prop-types';
import './container.css';

export const Container = ({backgroundColor, primary, label, ...props }) => {
  const mode = primary ? 'containerPrimary' : 'containerSecondary';
  return (
    <div
      className={['container', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
        {label}
    </div>
  );
};

Container.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Container.defaultProps = {
  backgroundColor: null,
  primary: false,
};
