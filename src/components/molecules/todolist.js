import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList ({ todos, onToggleCompleted }) {
  return (
    
      <div>
        
        {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          label={todo.label}
          completed={todo.completed}
          onToggleCompleted={onToggleCompleted}
        />
    
      ) )}
     </div>
    )
}