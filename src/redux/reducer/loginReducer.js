import types from '../types'

const initState = {
    loginName: ''
}


export default function(state=initState, action) {
    switch (action.type) {
        case types.LOGIN_NAME: {
            return {
                ...state,
                loginName: action.loginName
            }
        }

        default:
            return state;
    }
}
