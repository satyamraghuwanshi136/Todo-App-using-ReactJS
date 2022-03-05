import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    todo: {
      content: '',
    },
    isEmpty: false,
  };
  onChangeHandler = (e) => {
    let todo = { ...this.state.todo };
    todo.content = e.target.value;
    this.setState({ todo });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!this.state.todo.content) return this.setState({ isEmpty: true });
    this.setState({ isEmpty: false });
    this.props.submitted(this.state.todo);
    let todo = { ...this.state.todo };
    todo.content = '';
    this.setState({ todo });
  };

  render() {
    let helper;
    if (this.state.isEmpty) {
      helper = <p className="red-text">Please enter something</p>;
    }
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmitHandler}>
          <input
            placeholder="Enter todo...."
            type="text"
            id="text"
            value={this.state.todo.content}
            onChange={this.onChangeHandler}
          />
          {helper}
        </form>
      </div>
    );
  }
}

export default AddTodo;
