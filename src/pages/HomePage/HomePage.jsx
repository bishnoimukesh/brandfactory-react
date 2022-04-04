import React from 'react'
import {Nav} from "./../../components/Nav/Nav";
import Hero_Img from './../../assets/hero2.jpg';
import {Card} from './../../components/Card/Card';
import './HomePage.css'
import {Link} from 'react-router-dom';
import {useCartContext} from './../../Context/CardContext';

const HomePage = () => {
    const {getProduct:{productData}} = useCartContext();

    return (
        <div>
            <Nav />
            <header className="hero-section">
            <div className="content">
                <img src={Hero_Img} className="hero-img" alt="hero img" />
                <div className="centered brand-name">Brand Factory</div>
                <Link to="/ProductPage">
                    <button className="btn success centered-btn">Explore more &rarr;</button>
                </Link>

                </div>
            </header>

            <div className="product">
                <h2 className="product-category">Best Selling</h2>
                <div className="product-scroll-container">
                    {productData.map((item) => <Card data={item} key={item.id}/>)}
                </div>																																													
            </div>

        </div>
    )
}

export {HomePage}