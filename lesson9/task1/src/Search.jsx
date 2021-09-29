import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    // останавливает React от сброса свойств обьекта события
    e.persist();
    this.setState({
      value: e.target.value,
    });
  };

  search = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <>
        <form className="search">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            className="search__input"
          />
          <button onClick={this.search} className="search__button" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
