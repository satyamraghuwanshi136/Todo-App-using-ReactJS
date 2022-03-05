import React, { Component } from 'react';

import TodoItems from './components/todoItems';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'make tea' },
      { id: 2, content: 'fetch vegitables' },
    ],
  };

  deleteTodoHandler = (id) => {
    let todosCopy = [...this.state.todos];
    todosCopy = todosCopy.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos: todosCopy });
  };

  addTodoHandler = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <h2 className="center-align teal-text teal-accent-3">Todo's</h2>
        <AddTodo submitted={this.addTodoHandler} />
        <TodoItems
          deleteTodo={this.deleteTodoHandler}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
