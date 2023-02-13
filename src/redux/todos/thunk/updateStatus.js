import { toggled } from "../actions";

export const updateStatus = (todoId, completed) =>{
    return async(dispatch)=>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method:'PATCH',
            body:JSON.stringify({
                completed: !completed
            }),
            headers:{
                "Content-type":"application/json"
            }
        });

        const todo =await response.json();
        dispatch(toggled(todo.id))
    }
}