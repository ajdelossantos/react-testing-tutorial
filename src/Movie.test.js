import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render,
  cleanup
} from 'react-testing-library';
import Movie, { POSTER_PATH } from './Movie';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalledTimes(1);
});


test('<Movie /> with movie', () => {
  const testMovie = {
    title: "WAT",
    poster_path: "wat.jpg",
    id: "0"
  };


  const {
    debug,
    getByTestId
  } = render(
    <MemoryRouter>
      <Movie movie={testMovie}/>
    </MemoryRouter>
  );

  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${testMovie.id}`)
  expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${testMovie.poster_path}`)
});