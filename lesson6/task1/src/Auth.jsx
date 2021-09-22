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

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <>
          {this.state.isLoggedIn ? <Logout func={this.onLogout} /> : <Login func={this.onLogin} />}
        </>
      </div>
    );
  }
}
