import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import SpotifyLogo from '../svg/SpotifyLogo';

describe('Header', () => {
  const customLogo = <SpotifyLogo />;
  const userName = {
    user: {
      name: 'Jane Doe',
    }
  };

  test('should show the string in logo', () => {
    // 1. ARRANGE
    render(<Header logo='string'/>);
  
    // 3. ASSERT
    expect(screen.getByText('string')).toBeInTheDocument();
  });

  test('should show the custom logo', () => {
    // 1. ARRANGE
    render(<Header logo={customLogo} />);
  
    // 3. ASSERT
    expect(screen.queryByTitle('custom-logo')).toBeInTheDocument();
  });

  test('should render user name and the log out button', () => {
    // 1. ARRANGE
    render(<Header user={userName} />);
  
    // 3. ASSERT
    expect(screen.getByTitle('Welcoming user')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  test('should render the log in button', () => {
    // 1. ARRANGE
    render(<Header />);
  
    // 3. ASSERT
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });
});