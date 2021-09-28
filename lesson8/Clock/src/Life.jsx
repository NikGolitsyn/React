import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log(`constructor: good place to create state`);
    this.state = {
      date: this.props.date,
      visable: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
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
    console.log(`cleanup before DOM related to component will be removed`);
  }

  render() {
    console.log(`return React element to build DOM`);
    return <h1 className="login btn">{this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default Life;
