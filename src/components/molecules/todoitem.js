components/molecules/TodoItem/TodoItem.jsx
import React from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Label from '../../atoms/Label/Label';

const TodoItem = ({ id, label, completed, onToggleCompleted }) => {
  return (
    <div>
      <Checkbox checked={completed} onChange={() => onToggleCompleted(id)} />
      <Label>{label}</Label>
    </div>
  );
};

export default TodoItem;