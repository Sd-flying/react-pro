import {ADD_TO_CART} from "../actions";
import types from "../types";

const initState = {
    cityId: '',
    menuName: '首页'
}

/**
 * 函数导出
 * @param state
 * @param action
 * @returns {{menuName, cityId}|({menuName, cityId}&{menuName: (string|*)})}
 */
export default function(state = initState, action) {
    switch (action.type) {
        case types.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
            break;
        default:
            return {
                ...state
            }
            break;
    }
}
