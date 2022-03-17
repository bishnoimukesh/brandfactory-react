import React from 'react'; 
import {useCartContext} from './../../Context/CardContext';
import { calculatePrice, calculateFinalPrice, calculateDeliveryCharges  } from './../../Reducer/priceCalculation';

const PriceCard = () => {
    const {cartState:{cart}} = useCartContext();
    // console.log(cart);
    const totalPrice = calculatePrice(cart)
    const finalPrice = calculateFinalPrice(totalPrice)
    const deliveryCharges = calculateDeliveryCharges(finalPrice)

    console.log(totalPrice, finalPrice, deliveryCharges);
    return (
        <div className="card-container">
                        <div className="card">
                            <div className="card-details">
                                <div className="name">
                                <h2 className="name-heading">Price Details</h2><hr/>
                                </div>
                                <div className="item-price">
                                    <p>Price({cart.length}items)</p>
                                    <p>Rs. {totalPrice.sum}</p>
                                </div>
                                <div className="item-price">
                                    <p>Discount</p>
                                    <p>Rs. {totalPrice.discount}</p>
                                </div>
                                <div className="item-price">
                                    <p>Delivery Charges</p>
                                    <p>Rs. {deliveryCharges}</p>
                                </div>
                                <hr/>
                                <div className="item-price">
                                    <p>Total</p>
                                    <p>Rs. {finalPrice}</p>
                                </div>
                                <button className="btn btn-icon success-icon cart">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span>Place Order</span>
                                </button>
                            </div>
                        </div>
                    </div>	
    )
}

export { PriceCard }