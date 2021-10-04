import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, deleteTask, fetchTaskList, updateTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.mounted = true;
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTaskList().then(tasksList => {
      if (this.mounted) {
        this.setState({
          tasks: tasksList,
        });
      }
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  onCreate = text => {
    const newTask = { text, done: false, id: Math.random() };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = { text, done: !done };
    updateTask(updatedTask, id).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
