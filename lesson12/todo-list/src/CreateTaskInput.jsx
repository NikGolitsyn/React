import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleCreateTask = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          className="create-task__input"
          onChange={this.handleChange}
        />
        <button className="btn" onClick={this.handleCreateTask}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1 Take text from input
// 2 Create task with this text
// 3 Add created task to the list
