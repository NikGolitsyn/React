import React from 'react';
import Life from './Life';

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
    return (
      <div>
        <button className="btn logout" onClick={this.onToggle}>
          Success
        </button>
        {this.state.visable && <Life date={this.props.date} toggle={this.onToggle} />}
      </div>
    );
  }
}

export default App;
