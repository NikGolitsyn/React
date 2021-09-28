import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log(`constructor: good place to create state`);
    this.state = {
      number: this.props.number,
      visable: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 2000);
    console.log(`componentDidMount: API calls, subscriptions`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate(nextProps, nextState): decide to render or not to render`);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log(`return React element to build DOM`);
    return <>{this.state.visable && <button className="login btn">{this.state.number}</button>}</>;
  }
}

export default Life;
