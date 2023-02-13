import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes"

export const todoAdd = (text) =>{
    return {
        type: ADDED,
        payloads: text
    }
}

export const todoLoaded = (todos) =>{
    return {
        type:LOADED,
        payloads:todos
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