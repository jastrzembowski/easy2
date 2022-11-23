import {fetchCart, fetchUser} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart()

export const initialState = {
    user : userInfo,
    menu : localStorage.getItem('menu'),
    cartShow : false,
    cartItems: cartInfo,
};