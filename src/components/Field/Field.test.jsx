import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Field } from './Field';

test('should update input value when typing', () => {
  // 1. ARRANGE
  render(<Field label='Search' />);

  // 2. ACT
 userEvent.type(screen.getByPlaceholderText('Search'), 'Hello,World!')
  
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

test('should render Field with value', () => {
  // 1. ARRANGE
  render(<Field label='Search' value='test' />);

  // 3. ASSERT
  expect(screen.getByPlaceholderText('Search')).toHaveValue('test')
});


test('should clear the Field and remove CloseIcon', async () => {
  // 1. ARRANGE
  render(<Field label='Search' value='test' />);

  // 2. ACT
  await userEvent.click(screen.getByLabelText('Click to clear the field'))
  
  // 3. ASSERT
  expect(screen.getByPlaceholderText('Search')).toHaveValue('');
  expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
});