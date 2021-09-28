import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log(`constructor: good place to create state`);
    this.state = {
      number: this.props.number,
    };
  }

  componentDidMount() {
    console.log(`componentDidMount: API calls, subscriptions`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate(nextProps, nextState): decide to render or not to render`);
    return nextProps.number % 2;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(`componentDidUpdate(prevProps, prevState): some updates based on new props`);
  }

  componentWillUnmount() {
    console.log(`cleanup before DOM related to component will be removed`);
  }

  onClickHandler() {
    this.setState({
      number: Math.trunc(Math.random() * 100),
    });
  }

  render() {
    console.log(`return React element to build DOM`);
    return (
      <button className="btn logout" onClick={() => this.onClickHandler()}>
        Success {this.state.number}
      </button>
    );
  }
}

export default Life;
