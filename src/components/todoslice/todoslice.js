import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const { id, status } = action.payload;
      const todo = state.find(item => item.id === id);
      if (todo) {
        todo.status = status;
      }
    },
  },
});

export const { addTodo, toggleTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;


