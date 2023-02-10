import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const todoAdd = (todoName) =>{
    return {
        type: ADDED,
        payloads: todoName
    }
}

export const markAsAllCompleted = () =>{
    return {
        type: ALLCOMPLETED
    }
}

export const clearCompleted = () =>{
    return {
        type: CLEARCOMPLETED
    }
}

export const toggled = (todoId) =>{
    return {
        type:TOGGLED,
        payloads: todoId
    }
}

export const colorSelect = (todoId, color) =>{
    return {
        type:COLORSELECTED,
        payloads: {
            todoId,
            color
        }
    }
}

export const deleteTodo = (todoId)=>{
    return {
        type: DELETED,
        payloads: todoId
    }
}