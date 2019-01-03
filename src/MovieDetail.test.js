import React from 'react';
import {
  render,
  cleanup,
  waitForElement
} from 'react-testing-library';
import MovieDetail from './MovieDetail';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

global.fetch = require('jest-fetch-mock');

const match = {
  params: {
    id: "wat"
  }
}

console.error = jest.fn();

test('<MovieDetail />', async () => {

  const movie = {
    id: 'wat',
    title: 'OMG Wat ?!'
  }

  fetch.mockResponseOnce(JSON.stringify(movie));

  const {
    debug,
    getByText,
    getByTestId
  } = render(<MovieDetail match={ match }/>);

  await waitForElement(() => getByText('OMG Wat ?!'))
  expect(getByTestId('movie-title').textContent).toBe(movie.title);

});