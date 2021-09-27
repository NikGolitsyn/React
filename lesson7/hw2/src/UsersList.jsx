import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrevHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNextHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    let startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    let endIndex = startIndex + this.state.itemsPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.goPrevHandler}
          goNext={this.goNextHandler}
          totalItems={this.props.users.length}
          currentPage={this.state.currentPage}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {this.props.users.slice(startIndex, endIndex).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
