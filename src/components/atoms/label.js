import React, { useState } from "react";
import TodoForm from "./todoitem";
import TodoList from "./todolist";
import PendingTasks from './pending'
import styles from "./label.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const pendingTasks = todos.filter((todo) => !todo.completed).length;


  return (
    <div className={styles.Label}>
      <div className={styles.line}>
      <h1>Todo List</h1>
      <PendingTasks count={pendingTasks}/>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      </div>
    </div>
  );
};

export default Todo;
