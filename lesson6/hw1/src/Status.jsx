import React from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends React.Component {
  state = {
    isOnline: true,
  };

  render() {
    return <>{this.state.isOnline ? <Online /> : <Offline />}</>;
  }
}

export default Status;
