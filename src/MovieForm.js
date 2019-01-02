import React, { Component } from 'react'

export default class MovieForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { submitForm } = this.props,
                    text = this.state;

    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={ () => submitForm({ text }) }
        >
          <input type="text" />
          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
