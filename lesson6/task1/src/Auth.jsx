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
    return (
      <div className="panel">
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.onLogout} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </div>
    );
  }
}
