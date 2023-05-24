import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout }) => (
  <header>
    <div className="header">
      <div>
        <h1>Spoty-Fire</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button onClick={onLogin} label="Log in" />
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
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
  onLogin: () => {},
  onLogout: () => {},
};
