import styles from './todolist.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodoStatus } from '../todoslice/todoslice';
import React, { useState } from 'react';

const TodoList = () => {
  const [todoName, setTodoName] = useState('');
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoName.trim()) {
      const newTodo = {
        name: todoName,
        id: Date.now().toString(),
        status: 'pending',
      };
      dispatch(addTodo(newTodo));
      setTodoName('');
    }
  };

  const handleToggleTodo = (id, status) => {
    const newStatus = status === 'pending' ? 'completed' : 'pending';
    dispatch(toggleTodoStatus({ id, status: newStatus }));
  };

  return (
    <div className={styles.TodoList}>
      <input className={styles.field}
        type="text"
        value={todoName}
        onChange={e => setTodoName(e.target.value)}
      />
      <button class={styles.btn} onClick={handleAddTodo}>+</button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            {todo.name} - {todo.status}
            <button class={styles.Btn} onClick={() => handleToggleTodo(todo.id, todo.status)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

