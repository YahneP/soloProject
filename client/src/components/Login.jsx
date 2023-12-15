import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
    return (
        <div className="login-wrapper">
    
            <form className="loginForm"> 
                <Link className='registerLink' to={"/register"}> Don't Have an Account? Register </Link>
                <div className="login-title"><h1>Welcome Back</h1></div>
                <div>
                    <label>Email: 
                    <input type="email"/></label> 
                </div>
                <div className="spacebetween"></div>
                <div>
                    <label>Password: 
                    <input type="password"/></label>
                </div> 
            </form>
            <Link to={"/new"}><button className="loginbutton">Log in</button></Link>    
        </div>
    ) 
}

export default Login
