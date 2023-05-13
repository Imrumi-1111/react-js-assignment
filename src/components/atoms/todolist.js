

import styles from "./todolist.module.css";
import React from "react";
import TodoApp from "./todolapp";

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <div className={styles.TodoList}>
    <ol>
      {todos.map((todo) => (
        <TodoApp
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ol>
    </div>
  );
};

export default TodoList;
