import { todoLoaded } from "../todos/actions";

export const fetchTodo = async(dispatch, getState) =>{
    const response = await fetch('http://localhost:9000/todos')
    const todos = await response.json();
    dispatch(todoLoaded(todos))
    console.log(`Updated total data - ${getState().count}`);
}