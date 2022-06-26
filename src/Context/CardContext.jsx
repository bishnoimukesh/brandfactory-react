import React, {useContext, createContext, useReducer, useEffect} from 'react';
import {addToCartReducer, getDataReducer} from './../Reducer/addToCartReducer';
import {wishListReducer} from './../Reducer/wishListReducer';
import {filterReducer} from './../Reducer/filterReducer';
import { getData } from '../api-Calls/api-utility';

const CartContext = createContext();
const useCartContext = () =>  useContext(CartContext);

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(addToCartReducer, {cart: []});
    const [getProduct, getProductDispatch] = useReducer(getDataReducer, {productData: []});
    const [wishState, wishDispatch] = useReducer(wishListReducer, {wishList: []});
    const [filterState, filterDispatch] = useReducer(filterReducer, {filterByRating: 0, filterByCategory:[], filterBySortBy:"", filterByPriceRange:5000, filterBySearch: ""});

    useEffect(() => {
        (async () => {
        const productData = await getData();
        getProductDispatch({type: "GET_DATA", payload: productData});
    })();
    }, []);

    
    return <CartContext.Provider value={{cartState, getProduct, getProductDispatch, cartDispatch, wishState, wishDispatch, filterState, filterDispatch}}>
            {children}
        </CartContext.Provider>;
};

export {CartProvider, useCartContext};