import React from 'react';
import UserForm from './UserForm';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="column">
        <UserForm userData={this.props.userData} onChange={this.props.onChange} />
      </div>
    );
  }
}
