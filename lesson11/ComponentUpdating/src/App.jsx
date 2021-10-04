import React from 'react';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';
import Numbers from './Numbers';

export default class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="All numbers" number={17} />
      </div>
    );
  }
}
