import React from 'react';

const todoItems = (props) => {
  if (!props.todos.length) {
    return (
      <div className="collection ">
        <h6 className="collection-item  red accent-1 ">You have no todo's</h6>
      </div>
    );
  } else {
    return props.todos.map((todo) => {
      return (
        <div className="collection" key={todo.id}>
          <h6
            className="collection-item todoDeletable teal lighten-4"
            onClick={() => props.deleteTodo(todo.id)}
          >
            {todo.content}
          </h6>
        </div>
      );
    });
  }
};

export default todoItems;
