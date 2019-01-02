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
        container,
        getByText,
        getByLabelText
  }              = render(<MovieForm submitForm={ onSubmit } />);

    // debug();

    expect(getByTestId('movie-form')).toBeTruthy()

    // Alt syntax -- might not work
    // getByLabelText('Text').value = 'hello';
    // fireEvent.change(getByLabelText('Text'));

    fireEvent.change(getByLabelText('Text'), {
      target: { value: 'hello' }
    });

    fireEvent.click(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ text: 'hello', });


    expect(container.firstChild).toMatchSnapshot();

});