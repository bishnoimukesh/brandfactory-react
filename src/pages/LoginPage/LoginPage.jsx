import React, {useReducer} from 'react'
import './LoginPage.css'
import {Nav} from './../../components/Nav/Nav';
import {Link, useNavigate} from 'react-router-dom';
import {loginReducer} from '../../Reducer/authReducer';
import {useAuthContext} from '../../Context/AuthContext';
import axios from 'axios';


const LoginPage = () => {
    const { authDispatch} = useAuthContext();
    const [loginState, loginDispatch] = useReducer(loginReducer, {email: "", password: ""});
    const {email, password} = loginState;
    const navigate = useNavigate();
    const submitHandler = async(e, email, password) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/auth/login", {email, password})
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(res.data.foundUser));
            authDispatch({type: "LOGIN_SUCCESS"});
            authDispatch({type: "TOKEN_RECEIVED", payload: res.data.encodedToken});
            authDispatch({type: "USER_RECEIVED", payload: res.data.foundUser});
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Nav />
            <div className="login-container">
            <div className="login-card">
                <div className="login-card-header">
                    <h1 className="login-card-title">Login</h1>
                </div>
                <div className="login-card-body">
                    <form className="login-form" onSubmit={(e) => submitHandler(e, email, password)}>																			
                        <div className="login-form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input className="input" type="email" name="email" placeholder="Email" value={email}
                            onChange={(e) => loginDispatch({ type: "EMAIL_CHANGED", payload: e.target.value })} required />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="password">Password</label><br/>
                            <input className="input" type="password" name="password" placeholder="Password" value={password}
                            onChange={(e) => loginDispatch({ type: "PASSWORD_CHANGED", payload: e.target.value })} required />
                        </div>
                        <div className="login-form-checkbox">
                            <input type="checkbox" />
                            <label htmlFor="remember">Remember me</label><br/>
                        </div>
                        <div className="login-form-group">
                            <button type="submit" className="btn success login-btn">Login</button>
                        </div>
                        <div className="login-form-group form-link">
                            <Link to="/SignUpPage">Forget Password</Link>
                            <Link to="/SignUpPage">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export {LoginPage}