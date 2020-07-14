/**
 * Action类型
 */
import types from '../types'

/**
 * View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。例如：switchMenu
 * @param menuName
 * @returns {{menuName: *, type: string}}
 */
export function switchMenu(menuName) {
    return {
        type: types.SWITCH_MENU,
        menuName
    }
}

// 添加input值
// export const ADD_INPUT_NAME = ''
export function addInputName(inputValue) {
    return {
        type: types.ADD_INPUT_NAME,
        inputValue
    }
}

// 添加loginName
// export const LOGIN_NAME: 'LOGIN_NAME'
export function addILoginName(loginName) {
    return {
        type: types.LOGIN_NAME,
        loginName
    }
}


export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(project, quatity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { project, quatity, unitCost }
    }
}

