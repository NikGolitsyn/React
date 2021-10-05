import React from 'react';
import { getUser } from './userGateway';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  changeHandler = e => {
    if (!e.target.closest('li')) {
      return;
    }
    this.fetchUser();
  };

  fetchUser = () => {
    getUser(this.props.match.params.userId).then(body => {
      this.setState({
        userData: body,
      });
    });
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.match.params.userId === this.props.match.params.userId;
  }

  componentDidMount() {
    window.addEventListener('click', this.changeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.changeHandler);
  }

  render() {
    const { userData } = this.state;

    if (!userData) {
      return null;
    }
    console.log(this.props.match.params.userId);
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
