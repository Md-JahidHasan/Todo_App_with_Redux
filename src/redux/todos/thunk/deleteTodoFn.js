import { deleteTodo } from "../actions";

export const deleteTodoFn = (todoId) =>{
    return async (dispatch)=>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method:'DELETE'
        });
        dispatch(deleteTodo(todoId))
    }
}