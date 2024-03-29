import React from 'react';
import UserForm from './UserForm';

export default class App extends React.Component {
  createUser = userData => {
    event.preventDefault();
    console.log(userData);
  };

  render() {
    return (
      <>
        <UserForm onSubmit={this.createUser} />
      </>
    );
  }
}
