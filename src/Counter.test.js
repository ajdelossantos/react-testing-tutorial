import React from 'react';
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library';
import Counter from './Counter';

describe('Counter', () => {
  const { debug, getByTestId } = render(<Counter />),
                 counterButton = getByTestId('counter-button');

  // debug(); // comment in if debug needed

  // afterEach(cleanup);

  test('is a button', () => {
    expect(counterButton.tagName).toBe('BUTTON');
  });
  
  test('count initializes to zero ', () => {
    expect(counterButton.textContent).toBe('0');
  });

  test('clicking the button increments the count', () => {
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
  });

});