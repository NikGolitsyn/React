import React from 'react';
import { getUser } from './userGateway';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      userData: null,
    };
  }

  changeHandler = e => {
    if (!e.target.closest('li')) {
      return;
    }
    this.setState({
      userId: this.props.match.params.userId,
    });
    getUser(this.state.userId).then(body => {
      this.setState({
        userData: body,
      });
    });
  };

  componentDidMount() {
    window.addEventListener('click', this.changeHandler);
    getUser(this.state.userId).then(body => {
      this.setState({
        userData: body,
      });
    });
  }


  componentWillUnmount() {
    window.removeEventListener('click', this.changeHandler);
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return null;
    }
    const { avatar_url, location, name } = userData;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
