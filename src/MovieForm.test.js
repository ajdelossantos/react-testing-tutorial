import React from 'react';
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library';
import MovieForm from './MovieForm';





test('<MovieForm />', () => {
  afterEach(cleanup);

  const onSubmit = jest.fn(),
  {
        debug,
        getByTestId,
        queryByTestId,
        container,
        getByText
  }              = render(<MovieForm submitForm={ onSubmit } />);

    // debug();

    expect(getByTestId('movie-form')).toBeTruthy()

    fireEvent.click(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);

});