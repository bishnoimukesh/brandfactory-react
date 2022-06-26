import React,{useReducer} from 'react'
import {Nav} from '../../components/Nav/Nav';
import {signUpReducer} from '../../Reducer/authReducer';
import {useAuthContext} from '../../Context/AuthContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
    const {authDispatch} = useAuthContext();
    const [signUpState, signUpDispatch] = useReducer(signUpReducer, {firstName:"", lastName:"", email: "", password: "", rePassword: ""});
    const {firstName, lastName, email, password} = signUpState;
    const navigate = useNavigate();
    const submitHandler = async(e, firstName, lastName, email, password) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/auth/signup", {firstName, lastName, email, password})
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(res.data.createdUser));
            authDispatch({type: "TOKEN_RECEIVED", payload: res.data.encodedToken});
            authDispatch({type: "USER_RECEIVED", payload: res.data.createdUser});
        } catch (error) {
            console.log(error);
        }finally{
            navigate("/");
        }
    }
    return (
        <>
            <Nav />
            <div className="login-container">
                <div className="login-card">
                    <div className="login-card-header">
                        <h1 className="login-card-title">Sign Up</h1>
                    </div>
                    <div className="login-card-body">
                        <form className="login-form" onSubmit={(e) => submitHandler(e, firstName, lastName, email, password)}>																			
                            <div className="login-form-group">
                                <label htmlFor="firstName">First Name</label><br/>
                                <input className="input" type="text" name="firstName" placeholder="First name" 
                                onChange={(e) => signUpDispatch({ type: "FIRST_NAME_CHANGED", payload: e.target.value })} required />
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="lastName">Last Name</label><br/>
                                <input className="input" type="text" name="lastName" placeholder="Last name" 
                                onChange={(e) => signUpDispatch({ type: "LAST_NAME_CHANGED", payload: e.target.value })} required />
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="email">Email</label><br/>
                                <input className="input" type="email" name="email" placeholder="Email" 
                                onChange={(e) => signUpDispatch({ type: "EMAIL_CHANGED", payload: e.target.value })} required />
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="password">Password</label><br/>
                                <input className="input" type="password" name="password" placeholder="Password" 
                                onChange={(e) => signUpDispatch({ type: "PASSWORD_CHANGED", payload: e.target.value })} required />
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="rePassword">Password</label><br/>
                                <input className="input" type="password" name="rePassword" placeholder="Re-enter Password" 
                                onChange={(e) => signUpDispatch({ type: "RE_PASSWORD_CHANGED", payload: e.target.value })} required />
                            </div>
                            <div className="login-form-checkbox">
                                <input type="checkbox" />
                                <label htmlFor="T&C">Terms & conditions<sup>*</sup></label><br/>
                            </div>
                            <div className="login-form-group">
                                <button type="submit" className="btn success login-btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export {SignUpPage}