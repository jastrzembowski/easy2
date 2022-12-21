import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialState} from "./initialState"
import { ProductListReducer } from "../reducers/productReducer"

const reducer = combineReducers({
    productsList : ProductListReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store