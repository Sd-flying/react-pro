import types from "../types";

const initState = {
    inputValue: '李四'
}

export default function(state=initState, action) {
    switch (action.type) {
        case types.ADD_INPUT_NAME: {
            return {
               ...state,
                inputValue: action.inputValue
            }
        }

        default:
            return state;
    }
}
