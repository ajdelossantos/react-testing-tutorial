import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0,
  }





  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }





  render() {
    const { count } = this.state;

    return (
      <div className="counter__div">
        <button
          data-testid="counter-button"
          onClick={ this.incrementCount }
        >
          {count}
        </button>
      </div>
    )
  }
}