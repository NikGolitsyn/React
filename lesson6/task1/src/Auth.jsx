import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    let button;
    if(!this.state.isLoggedIn) {
      button = <Login onLogin={this.onLogin} />
    } else {
      button = <Logout onLogout={this.onLogout} />;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={false} />
       <div>{button}</div>
      </div>
    );
  }
}
