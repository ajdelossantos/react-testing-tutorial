import React from 'react';
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {

  afterEach(cleanup)

  const { debug, getByTestId } = render(<Counter />),
                 counterButton = getByTestId('counter-button');

  // debug();

    expect(counterButton.tagName).toBe('BUTTON');

    expect(counterButton.textContent).toBe('0');


    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');


});