
import styles from "./todoitem.module.css";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      task: newTodo,
      completed: false,
      id: Math.floor(Math.random() * 1000),
    });
    setNewTodo("");
  };

  return (
    <div className={styles.item}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input}
        type="text"
        placeholder="Add Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button class={styles.btn} type="submit">+</button>
    </form>
    </div>
  );
};

export default TodoForm;


