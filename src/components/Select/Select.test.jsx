import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Select } from './Select';

describe('Select', () => {
  const optionsMock = [{
    id: "name1",
    label: "name1",
    value: 1,
  }, {
    id: "name2",
    label: "name2", 
    value: 2,
  }, {
    id: "name3",
    label: "name3", 
    value: 3,
  }];

  test('should render the label text and the close icon', () => {
    // 1. ARRANGE
    render(<Select label='Select' options={optionsMock} />);
  
    // 3. ASSERT
    expect(screen.getByText('Select')).toBeInTheDocument();
    expect(screen.queryByTestId('close-icon')).toBeInTheDocument();
  });
  
  test('should render option menu when click on button', async () => {
    // 1. ARRANGE
    render(<Select label='Select' options={optionsMock} />);
  
    // 2. ACT
    await userEvent.click(screen.getByText('Select'));
  
    // 3. ASSERT
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'name1'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'name2'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'name3'})).toBeInTheDocument();
  });
  
  test('should hide option menu when click on the option item', async () => {
    // 1. ARRANGE
    render(<Select label='Select' options={optionsMock} />);
  
    // 2. ACT
    await userEvent.click(screen.getByText('Select'));
    await userEvent.click(screen.getByRole('option', {name: 'name1'}));
  
    // 3. ASSERT
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'name1'})).toBeInTheDocument();
  });

  test('should render check icon', async () => {
    // 1. ARRANGE
    render(<Select label='Select' options={optionsMock} />);
  
    // 2. ACT
    await userEvent.click(screen.getByText('Select'));
    // selecting the option "name1"
    await userEvent.click(screen.getByRole('button', {name: 'name1'}));
    // reopening the select again
    await userEvent.click(await screen.findByText('name1'));
    
    
    // 3. ASSERT
      expect(screen.queryByTestId('check-icon')).toBeInTheDocument();
  });
})
