import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import './header.css';

export const Header = ({ logo, user, onLogin, onLogout }) => (
  <header>
    <div className="header" >
      {typeof logo === "string" 
        ? (<h1  className="string-logo">{logo}</h1>)
        : <div className="logo">{logo}</div>
      }
      <div>
        {user ? (
          <>
            <span
              title="Welcoming user"
              className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button 
              onClick={onLogout} 
              label="Log out"
              type="button" />
          </>
        ) : (
          <>
            <Button 
              onClick={onLogin} 
              label="Log in"
              type="button" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  logo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
  logo: null,
  onLogin: () => {},
  onLogout: () => {},
};
