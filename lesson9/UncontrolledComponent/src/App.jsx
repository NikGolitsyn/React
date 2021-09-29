import React from 'react';
import UserForm from './UserForm';

export default class App extends React.Component {
  createUser = userData => {
    event.preventDefault();
    const formDate = [...new FormData(userData)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );

    console.log(formDate);
  };

  render() {
    return (
      <>
        <UserForm onSubmit={this.createUser} />
      </>
    );
  }
}
