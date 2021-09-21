import React from 'react';

export default class GoodButton extends React.Component {
  handleClick(e) {
    console.log(e.target.textContent)
    console.log(e);
    alert('Good job!');
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}
