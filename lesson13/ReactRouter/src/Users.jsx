import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import User from './User';
import { getUser } from './userGateway';

class Users extends React.Component {
  state = {
    userData: null,
  };

  fetchUser = id => {
    getUser(id).then(body => {
      this.setState({
        userData: body,
      });
    });
  };

  render() {
    return (
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github" onClick={() => this.fetchUser('github')}>
              Github
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook" onClick={() => this.fetchUser('facebook')}>
              Facebook
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
          <Route path="/users/:userId">
            <User userData={this.state.userData} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Users;
