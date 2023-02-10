import { COLORCHANGED, FILTERKEYCHANGED } from "./actionTypes"

export const colourChanged = (color, changedType) =>{
    return{
        type: COLORCHANGED,
        payloads: {
            color,
            changedType
        }
    }
}

export const filterKeyChange = (filterKey) =>{
    return {
        type: FILTERKEYCHANGED,
        payloads: filterKey
    }
}