import React from "react";
import "./Nav.css";
import Brand_Logo from '../../assets/brand-logo.png'
import { Link } from "react-router-dom";
import {useCartContext} from "../../Context/CardContext";
import {useAuthContext} from "../../Context/AuthContext";

const Nav = () => {
    const {cartState:{cart}, wishState:{wishList}, filterDispatch} = useCartContext();
    const {authState:{isLogin}, authDispatch} = useAuthContext();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT_SUCCESS" })
    }
    return (
        <nav className="navbar">
            <div className="nav">
                <Link to="/">
                    <img src={Brand_Logo} className="brand-logo" alt="Brand_Logo" />
                </Link>
                <div className="nav-items">
                <div className="search">
                    <input
                    type="text"
                    className="search-box"
                    placeholder="search brand, product"
                    autoComplete="on"
                    onChange={(e) => filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}
                    />
                </div>

                <div className="nav-hamburger">
                    <i className="fa fa-solid fa-bars"></i>
                </div>

                <div className="nav-user">
                    <Link to="/LoginPage">
                    {isLogin ?  (<button className="btn success" onClick={logoutHandler}>Logout</button>) : 
                    (<button className="btn success">Login</button>)}
                    </Link>
                    <Link to="/WishListPage">
                        <div className="icon-badge">
                            <i className="fa-regular fa-heart heart-empty icon-badge-img"></i>
                            <div className="icon-badge-count">{wishList.length}</div>
                        </div>
                    </Link>
                    <Link to="/CartPage">
                        <div className="icon-badge">
                            <i className="fas fa-shopping-cart heart-empty icon-badge-img"></i>
                            <div className="icon-badge-count">{cart.length}</div>
                        </div>    
                    </Link>
                </div>
                </div>
            </div>
            <ul className="links-container">
                <li className="link-item">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="link-item">
                    <Link to="/" className="link">Men</Link>
                </li>
                <li className="link-item">
                    <Link to="/" className="link">Women</Link>
                </li>
            </ul>  
        </nav>
    );
};

export { Nav };
