import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.changed = true;
      const newTodos = action.payload;
      state.todos.push({
        id: newTodos.id,
        todo: newTodos.todo,
      });
    },
    removeTodos(state, action){
        const id = action.payload;
        const existingTodos = state.todos.find((item) => item.id === id);
        if(existingTodos){
            state.todos = state.todos.filter((item) => item.id !== id);
        }
    }
  },
});

export const TodoActions = TodoSlice.actions;
export default TodoSlice;
