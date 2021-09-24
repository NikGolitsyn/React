import React from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }
  // state = {
  //   text: null,
  // };

  render() {
    return <>{!this.state.isOnline ? <Offline /> : <Online />}</>;
  }
}

export default Status;
