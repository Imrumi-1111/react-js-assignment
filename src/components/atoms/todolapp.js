import styles from './todolapp.module.css'
import React, {  useState } from 'react'



const TodoApp = ({ todo, handleToggle, handleDelete }) => {
  const [css, setCss] = useState(false)
  function clearHandle(){
    setCss(!css)
  }
  return (
    <div className={styles.TodoApp}>
        <div className={styles.Todo}>
            <li className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleToggle(todo.id)}>{todo.task}</span>
            <button clasasName={styles.complete} onClick={clearHandle}>complete</button>
            <button class={styles.btn} onClick={() => handleDelete(todo.id)}>x</button>
            </li>
        </div>
    </div>
  );
};

export default TodoApp;

