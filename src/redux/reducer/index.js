/**
 * reducer数据处理
 */
import { combineReducers} from "redux";
import cartReducers from './cartReducers'
import productsReducers from './productsReducers'
import menuReducer from './menuReducers'
import loginReducer from './loginReducer'
import inputReducer from './inputReducer'




const allReducers = {
    products: productsReducers,
    shoppingCart: cartReducers,
    menuReducer: menuReducer,
    loginReducer:loginReducer,
    inputReducer: inputReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;






