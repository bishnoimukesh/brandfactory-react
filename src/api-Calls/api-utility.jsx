import axios from 'axios';
import { toast } from "react-toastify";

const getData = async() =>{
    try {
        const res = await axios.get("/api/products")
        const data = res.data.products;
        return data;
    } catch (error) {
        console.log("Error : ", error);
    }
}

const postWishlist = async(data, token) =>{
    try {
        const res = await axios.post("/api/user/wishlist", {product: {...data}}, {
            headers: {authorization: token}
        })
        const wishlist = res.data.wishlist;
        toast.success(<p>Item added to Wishlist.</p>)
        return wishlist;
    } catch (error) {
        toast.error(<p>Failed to add item to wishlist.</p>)
    }
}

const deleteWishlist = async(data, token) =>{
    try {
        const res = await axios.delete(`/api/user/wishlist/${data._id}`, {
            headers: {authorization: token}
        })
        const wishlist = res.data.wishlist;
        toast.warn(<p>Item removed from Wishlist.</p>)
        return wishlist;
    } catch (error) {
        toast.error(<p>Failed to remove item from wishlist.</p>)
    }
}

const postToCart = async(data, token) =>{
    try {
        const res = await axios.post("/api/user/cart", {product: {...data}}, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        toast.success(<p>Item added in Cart.</p>)
        return cart;
    } catch (error) {
        toast.error(<p>Failed to add Item in Cart.</p>)
    }
}

const increaseCartItem = async(data, token) =>{
    try {
        const res = await axios.post(`/api/user/cart/${data._id}`, {action: {
            type: "increment"
        }}, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        toast.success(<p>Item quantity increased.</p>)
        return cart;
    } catch (error) {
        toast.error(<p>Item quantity not increased.</p>)
    }
}

const decreaseCartItem = async(data, token) =>{
    try {
        const res = await axios.post(`/api/user/cart/${data._id}`, {action: {
            type: "decrement"
        }}, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        toast.success(<p>Item quantity decreased.</p>)
        return cart;
    } catch (error) {
        toast.error(<p>Item quantity not decreased.</p>)
    }
}

const deleteCartItem = async(data, token) =>{
    try {
        const res = await axios.delete(`/api/user/cart/${data._id}`, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        toast.success(<p>Item removed from cart.</p>)
        return cart;
    } catch (error) {
        toast.error(<p>Item not removed from cart.</p>)
    }
}

export {getData, postWishlist, deleteWishlist, postToCart, increaseCartItem, decreaseCartItem, deleteCartItem};