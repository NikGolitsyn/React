import React from 'react';

export default class Online extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="status">
        <span className="status__text">All good!</span>
      </div>
    );
  }
}
