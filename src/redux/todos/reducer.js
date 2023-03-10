import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes"

const initialState = [
    {
        id: 0,
        text: 'Learn Redux',
        completed: true,

    },
    {
        id: 1,
        text: 'Learn ReactJS',
        completed: false,
        color: 'red'
    }
]

const addNewId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: addNewId(state),
                    text: action.payloads,
                    completed: false
                }
            ]

        case LOADED:
            return action.payloads;

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payloads) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        case COLORSELECTED:
            const { todoId, color } = action.payloads;
            return state.map(todo => {
                if (todoId !== todo.id) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payloads)


        default: return state
    }
}