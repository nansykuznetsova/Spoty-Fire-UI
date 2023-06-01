import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Field } from './Field';

test('should update input value when typing', async () => {
  // 1. ARRANGE
  render(<Field label='Search' />);

  // 2. ACT
  await userEvent.type(screen.getByPlaceholderText('Search'), 'Hello,World!')
  
  // 3. ASSERT
  expect(screen.getByPlaceholderText('Search')).toHaveValue('Hello,World!')
});

test('should hide search icon depending of the searchBar prop', () => {
  // 1. ARRANGE
  render(<Field label='Search' />);

  // 3. ASSERT
  expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument();
});

test('should show search icon depending of the searchBar prop', () => {
  // 1. ARRANGE
  render(<Field label='Search' searchBar />);

  // 3. ASSERT
  expect(screen.getByTestId('search-icon')).toBeInTheDocument();
});


