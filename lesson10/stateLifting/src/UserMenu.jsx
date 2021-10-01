import React from 'react';

export default class UserMenu extends React.Component {
  render() {
    if (!this.props.userData) {
      return null;
    }
    const { avatar_url, name } = this.props.userData;
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {name}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}
