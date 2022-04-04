import React from 'react'
import './Card.css';
import {useCartContext} from './../../Context/CardContext';
import {Link, useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../Context/AuthContext';
import {postWishlist, deleteWishlist, postToCart} from '../../api-Calls/api-utility';


const Card = (props) => {
    const {authState:{token, isLogin}, authDispatch} = useAuthContext();
    const navigate = useNavigate();
    const data = props.data;
    const {cartState:{cart}, cartDispatch, wishState:{wishList},wishDispatch} = useCartContext();
    const wishListAddHandler = () => {
        if(isLogin){
        wishDispatch({type: "ADD_TO_WISHLIST", payload: data});
        postWishlist(data, token);
        }else{
            navigate("/LoginPage");
        }
    }
    const wishlistRemoveHandler = () => {
        wishDispatch({type: "REMOVE_FROM_WISHLIST", payload: data});
        deleteWishlist(data, token);
    }
    const addToCartHandler = () => {
        if (isLogin) {
            cartDispatch({type: "ADD_TO_CART", payload: data});
            postToCart(data, token);
        
            
        } else {
            navigate("/LoginPage")
        }
    }

    return (
        <div className="card shadow-card">
            <img className="card-img" src={data.image} alt="img"/>
            <div className="card-details">
                <div className="name">
                <h2 className="name-heading">{data.title}</h2>
                <h4 className="name-sub-heading">by ApniDukan</h4>
                </div>
                <p className="price">${data.price}
                    <small className="text-striked"> ${data.original_price}</small>
                </p>
                {cart.some(item => item.id === data.id) ? (<Link to="/CartPage"><button className="btn btn-icon success-icon cart">Go To Cart</button></Link>) :
                <button className="btn btn-icon success-icon cart" onClick={addToCartHandler}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>Add to cart</span>
                </button>}
            </div>
            <div className="card-dismiss">
                {wishList.some(item => item.id === data.id) ?
                (<button className="wishlist-btn" onClick={wishlistRemoveHandler}>
                    <i className="fas fa-heart btn-dismiss"></i>
                </button>) :
                (<button className="wishlist-btn" onClick={wishListAddHandler}>
                    <i className="fa-regular fa-heart"></i>
                </button>)}
            </div>
        </div>
    )
}

export { Card }