import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

export default class App extends React.Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: { ...this.state.userData, [name]: value },
    });
  };

  render() {
    const { firstName, lastName } = this.state.userData;
    return (
      <>
        <div className="page">
          <h1 className="title">
            Hello, {firstName} {lastName}
          </h1>
          <main className="content">
            <ShoppingCart userName={firstName} />
            <Profile userData={this.state.userData} onChange={this.handleChange} />
          </main>
        </div>
      </>
    );
  }
}
