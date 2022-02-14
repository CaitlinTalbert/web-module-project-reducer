export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY";
export const TOTAL_MEMORY = "TOTAL_MEMORY"; 
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// Create an action creator (in `./actions/index.js`) 
//that takes in an operator as an argument and creates an action object with the type `CHANGE_OPERATION.`

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const addMemory = () => {
    return ({type:ADD_MEMORY})
}

export const totalMemory = () => {
    return ({type:TOTAL_MEMORY})
}

export const clearMemory = () => {
    return ({type:CLEAR_MEMORY})
}