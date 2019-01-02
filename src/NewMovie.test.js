import React from 'react';
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library';
import NewMovie from './NewMovie';


test('<NewMovie />', () => {

  const {
    debug,
    getByTestId,
    container,
  } = render(<NewMovie />);

  afterEach(cleanup);

    // debug();

    expect(getByTestId('page-title').textContent).toBe('New Movie');

    expect(getByTestId('movie-form')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot();


});