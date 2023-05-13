import styles from './todolapp.module.css'

import React from "react";

const TodoApp = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div className={styles.TodoApp}>
        <div className={styles.Todo}>
            <li className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleToggle(todo.id)}>{todo.task}</span>
            <button class={styles.btn} onClick={() => handleDelete(todo.id)}>x</button>
            </li>
        </div>
    </div>
  );
};

export default TodoApp;

