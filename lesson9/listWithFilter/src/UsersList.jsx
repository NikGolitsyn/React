import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  filterHandler = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const { filterText } = this.state;
    const userList = [...this.props.users].filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    return (
      <div>
        <Filter filterText={filterText} count={userList.length} onChange={this.filterHandler} />
        <ul className="users">
          {userList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
