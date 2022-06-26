import React from 'react';
import './CartPage.css';
import {Nav} from './../../components/Nav/Nav';
import { VerticalCard } from '../../components/Card/VerticalCard';
import {useCartContext} from './../../Context/CardContext';
import {PriceCard} from './../../components/Card/PriceCard';

const CartPage = () => {
    const {cartState:{cart}} = useCartContext();
    
    return (
        <>
            <Nav />
            <div className="cart-container">
                <div className="Cart-heading">
                    <h1 className="cart-heading">Cart Items</h1>
                    <div className="cart-items">
                    <div className="item-container">
                        {cart.map(item => <VerticalCard data={item} key={item.id}/>)} 																
                    </div>
                    <div className="checkout-container">
                        <PriceCard />																			
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export { CartPage }