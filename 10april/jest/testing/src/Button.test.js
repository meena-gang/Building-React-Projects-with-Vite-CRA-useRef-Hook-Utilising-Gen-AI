// Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Import your Button component

describe('Button Component', () => {


  // Test case to check if button click event fires correctly
  it('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn(); // Mock function to track button click
    const buttonText = 'Click me';
    const { getByText } = render(<Button onClick={handleClick}>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement); // Simulate button click
    expect(handleClick).toHaveBeenCalledTimes(1); // Check if the click handler was called once
  });

  // Test case to check if button renders children correctly
  it('renders children inside the button', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button onClick={() => {}}>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement.textContent).toBe(buttonText); // Check if button contains correct text
  });
});
