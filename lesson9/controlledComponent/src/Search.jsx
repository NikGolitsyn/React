import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  search = event => {
    alert(`Search text: ${this.state.value}`);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form className="search" onSubmit={this.search}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            className="search__input"
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
