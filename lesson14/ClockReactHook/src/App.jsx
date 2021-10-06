import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };
  }

  onToggle = () => {
    this.setState({
      visable: !this.state.visable,
    });
  };

  render() {
    const { visable } = this.state;

    return (
      <>
        <button className="btn logout" onClick={this.onToggle}>
          {!visable ? 'Show time' : 'Hide time'}
        </button>
        {visable && <Clock location="New York" offset={-5} />}
        {visable && <Clock location="London" offset={0} />}
        {visable && <Clock location="Kyiv" offset={2} />}
      </>
    );
  }
}

export default App;
