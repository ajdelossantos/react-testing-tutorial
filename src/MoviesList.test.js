import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render,
  cleanup,
  waitForElement
} from 'react-testing-library';
import MoviesList from './MoviesList';


afterEach(() => {
  cleanup();
  console.error.mockClear();
});

global.fetch = require('jest-fetch-mock');
console.error = jest.fn();


test('<MoviesList /> with movies', async () => {

  const testMovies = {
    results: [
      { id: '0', title: 'testMovie0', poster_path: 'test0.jpg' },
      { id: '1', title: 'testMovie1', poster_path: 'test1.jpg' },
      { id: '2', title: 'testMovie2', poster_path: 'test2.jpg' },
      { id: '3', title: 'testMovie3', poster_path: 'test3.jpg' },
      { id: '4', title: 'testMovie4', poster_path: 'test4.jpg' },
    ],
  }

  fetch.mockResponseOnce(JSON.stringify(testMovies));

  const {
    debug,
    queryByTestId,
    getAllByTestId,
    getByTestId,
  } = render(
              <MemoryRouter>
                <MoviesList />
              </MemoryRouter>
            );

  expect(queryByTestId('movie-grid')).toBeFalsy();
  expect(getByTestId('loading').textContent).toBeTruthy();

  await waitForElement(() => getAllByTestId('movie-link'));

  expect(queryByTestId('loading')).toBeFalsy();
  expect(getAllByTestId('movie-link')).toHaveLength(5);

  const testMovie = testMovies.results[0];

  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${testMovie.id}`)

  // debug();
});