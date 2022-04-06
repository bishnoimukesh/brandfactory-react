import axios from 'axios';
import { toast } from "react-toastify";

const getData = async() =>{
    try {
        const res = await axios.get("/api/products")
        const data = res.data.products;
        console.log("data aaya hai", data);
        return data;
    } catch (error) {
        console.log("product nhi aara : ", error);
    }
}

const postWishlist = async(data, token) =>{
    try {
        const res = await axios.post("/api/user/wishlist", {product: {...data}}, {
            headers: {authorization: token}
        })
        const wishlist = res.data.wishlist;
        console.log("wishlist aaya hai", wishlist);
        return wishlist;
    } catch (error) {
        console.log("wishlist nhi aara : ", error);
    }
}

const deleteWishlist = async(data, token) =>{
    console.log(data, token)
    try {
        const res = await axios.delete(`/api/user/wishlist/${data._id}`, {
            headers: {authorization: token}
        })
        const wishlist = res.data.wishlist;
        toast.warn(<p>Item removed from Cart.</p>)
        console.log("wishlist aaya hai", wishlist);
        return wishlist;
    } catch (error) {
        console.log("wishlist nhi aara : ", error);
    }
}

const postToCart = async(data, token) =>{
    try {
        const res = await axios.post("/api/user/cart", {product: {...data}}, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        console.log("cart mei saman aaya hai", cart);
        return cart;
    } catch (error) {
        console.log("cart mei saman nhi aara : ", error);
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
        console.log("cart mei saman ki sankhya badhi hai", cart);
        return cart;
    } catch (error) {
        console.log("cart mei saman ki sankhya nhi badhi h : ", error);
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
        console.log("cart mei saman ki sankhya ghati hai", cart);
        return cart;
    } catch (error) {
        console.log("cart mei saman ki sankhya nhi ghati h : ", error);
    }
}

const deleteCartItem = async(data, token) =>{
    try {
        const res = await axios.delete(`/api/user/cart/${data._id}`, {
            headers: {authorization: token}
        })
        const cart = res.data.cart;
        console.log("cart ka saman delete kiya hai", cart);
        return cart;
    } catch (error) {
        console.log("cart ka saman delete nhi hua h : ", error);
    }
}

export {getData, postWishlist, deleteWishlist, postToCart, increaseCartItem, decreaseCartItem, deleteCartItem};