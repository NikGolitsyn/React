import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  showContentHandler = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };

  render() {
    const { children, title } = this.props;
    const { showContent } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.showContentHandler}>
            {!showContent ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        {showContent && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
}

Expand.defaultProps = {
  title: "A man can have anything, if he is willing to sacrifice"
}