import React from 'react';
import {useCartContext} from "../../Context/CardContext";
import {useAuthContext} from '../../Context/AuthContext';
import { increaseCartItem, decreaseCartItem, deleteCartItem, postWishlist } from '../../api-Calls/api-utility';


const VerticalCard = (props) => {

    const data = props.data;
    const {authState:{token}, authDispatch} = useAuthContext();
    const {cartState:{cart}, cartDispatch, wishState:{wishList}, wishDispatch} = useCartContext();
    const deleteCartHandler = () => {
        cartDispatch({type: "REMOVE_FROM_CART", payload: data});
        deleteCartItem(data, token);
    }
    const moveToWishlistHandler = () => {
        cartDispatch({type: "ADD_TO_WISHLIST", payload: data});
        if (wishList.find(item => item.id === data.id)) {
            console.log("none");
        } else {
            wishDispatch({ type: "ADD_TO_WISHLIST", payload: data })
            postWishlist(data, token)

        }
        cartDispatch({ type: "REMOVE_FROM_CART", payload: data })
        deleteCartItem(data, token)
    }
    const increaseItemHandler = () => {
        cartDispatch({type: "INCREASE_COUNT", payload: data});
        increaseCartItem(data, token);
    }
    const decreaseItemHandler = () => {
        cartDispatch({type: "DECREASE_COUNT", payload: data});
        decreaseCartItem(data, token);
    }

    return (
        <div className="card-horizontal-container">
            <div className="card-horizontal">
                <div className="card-col">
                    <img className="card-horizontal-img" src={data.image} alt="img"/>
                </div>
                <div className="card-col">
                    <div className="card-details">
                        <div className="name">
                        <h2 className="name-heading">{data.title}</h2>
                        <h4 className="name-sub-heading">by ApniDukan</h4>
                        </div>
                        <p className="price">${data.price}
                            <small className="text-striked">${data.original_price}</small>
                        </p>
                        <p>
                            <button className="decrease" disabled={data.qty===1 && "disabled"} onClick={decreaseItemHandler}>
                                -
                            </button>
                            <span>{data.qty}</span>
                            <button className="increase" onClick={increaseItemHandler}>
                                +
                            </button>
                        </p>
                        <button className="btn btn-icon success-icon danger-icon cart" onClick={deleteCartHandler} >
                            <i className="fas fa-trash"></i>
                            <span>Delete</span>
                        </button>
                        <button className="btn btn-icon success-icon cart" onClick={moveToWishlistHandler}>
                            <span>Save for Later</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>	
    )
}

export { VerticalCard };