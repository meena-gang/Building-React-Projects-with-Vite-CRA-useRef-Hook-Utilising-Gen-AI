// add.test.js
// Write test cases using jest and react testing library for a function named 
// add that takes two parameters and return their sum.
// utils.test.js

import { add } from './utils';
import { render, screen } from '@testing-library/react';
import { fetchData } from './utils';

describe('add function', () => {
  test('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive number and zero correctly', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('adds a positive number and a negative number correctly', () => {
    expect(add(8, -3)).toBe(5);
  });

  test('adds two negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds two decimal numbers correctly', () => {
    expect(add(2.5, 3.5)).toBe(6);
  });

  test('adds two large numbers correctly', () => {
    expect(add(1000000000, 2000000000)).toBe(3000000000);
  });

  test('adds two numbers in scientific notation correctly', () => {
    expect(add(1e10, 2e10)).toBe(3e10);
  });
});


// utils.test.js

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockData: 'mockResponse' }),
  })
);

describe('fetchData function', () => {
  test('fetches data from API correctly', async () => {
    // Call fetchData function
    const data = await fetchData();

    // Expect fetch to have been called with correct URL
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');

    // Expect data to match mock response
    expect(data).toEqual({ mockData: 'mockResponse' });
  });

  test('handles fetch error', async () => {
    // Mock fetch to throw an error
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch failed'));

    // Expect fetchData to throw error
    await expect(fetchData()).rejects.toEqual('Fetch failed');
  });
});