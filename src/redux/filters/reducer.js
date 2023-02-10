import { COLORCHANGED, FILTERKEYCHANGED } from "./actionTypes"

const initialState = {
    filterKey: "All",
    colorSelected: []
}

export const filterReducer = (state = initialState, action) =>{
    switch(action.type){
        case COLORCHANGED:
            const {color, changedType} = action.payloads;
            switch(changedType){
                case 'added':
                    return {
                        ...state,
                        colorSelected:[
                            ...state.colorSelected,
                            color
                        ]
                    }

                case 'removed':
                    return {
                        ...state,
                        colorSelected: state.colorSelected.filter(existingColor=> existingColor !== color)
                    }

                default: return state
            }

        case FILTERKEYCHANGED:
            return {
                ...state,
                filterKey: action.payloads
            }
        
        default: return state
    }
}