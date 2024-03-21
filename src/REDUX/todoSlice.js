import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todoList: [] }, 
    reducers: {
        addTodoItem: (state, action) => {
            const newTodo = {
                id: Math.random(),
                content: action.payload.newContent
            };
            state.todoList.push(newTodo); 
        }
    }
});

export const { addTodoItem } = todoSlice.actions;
export default todoSlice.reducer;