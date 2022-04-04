import React from 'react';
import './WishListPage.css';
import {Nav} from './../../components/Nav/Nav';
import {useCartContext} from './../../Context/CardContext';
import {Card} from './../../components/Card/Card';

const WishListPage = () => {
    const {wishState:{wishList}} = useCartContext();
    return (
        <>
            <Nav />
            <div className="wishlist-container">
                <div className="wishlist-heading">
                    <h1>Wishlist</h1>
                </div>
                <div className="wishlist-items-container">
                    {/* <p>Your wishlist is Empty</p> */}
                    {wishList.map(item => <Card data={item} key={item.id}/>)}
                </div>
            </div>
        </>
    )
}

export {WishListPage}