import React from 'react';

class Filter extends React.Component {
  render() {
    const { count, filterText, onChange } = this.props;
    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input type="text" className="filter__input" value={filterText} onChange={onChange} />
      </div>
    );
  }
}

export default Filter;
