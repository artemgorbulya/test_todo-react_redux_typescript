import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Array<Todo> = [
  { id: 1, name: 'Тестова назва', description: 'Тестовий опис', checked: false, deleted: false },
  { id: 2, name: 'Тестова назва 2', description: 'Тестовий опис 2', checked: true, deleted: false },
  { id: 3, name: 'Тестова назва 3', description: 'Тестовий опис 3', checked: false, deleted: true },

];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoString>) => [
      ...state,
      {
        id: state.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        checked: false,
        deleted: false
      }
    ],
    changeCheckedById: (state, action: PayloadAction<number>) =>
      state.map((todo) => (todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo)),
    deleteById: (state, action: PayloadAction<number>) =>
      state.map((todo) => (todo.id === action.payload ? { ...todo, deleted: true } : todo))
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, changeCheckedById, deleteById } = todoSlice.actions;

export default todoSlice.reducer;
