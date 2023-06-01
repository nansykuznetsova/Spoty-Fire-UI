import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Button } from './Button';


test('Should render the label text', async () => {
  // 1. ARRANGE
  render(<Button label='Play' primary="primary" />);

  // 2. ASSERT
  expect(screen.getByRole('button')).toHaveTextContent('Play')
});

test('Should call the on Click function', async () => {
  const onClick = jest.fn();
  // 1. ARRANGE
  render(<Button label="Play" variant="primary" onClick={onClick} />);

  // 2. ACT
  await userEvent.click(screen.getByRole('button'));

  // 3. ASSERT
  expect(onClick).toBeCalled();
});
