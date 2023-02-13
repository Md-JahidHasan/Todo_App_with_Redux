import { todoAdd } from "../actions";

export const addTodo = (todoText) =>{
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/todos', {
            method:'POST',
            body:JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers:{
                "Content-type": "application/json"
            }

        })
        const todo = await response.json();

        dispatch(todoAdd(todo.text))
    }
}