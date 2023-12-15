import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationForm = (props) => {

    return (
        <div className="regcontainer">
            <Link className='signInLink' to={"/login"}> Already Have an Account? Login </Link>
            <div className="regform"><h2>Registration Form</h2></div>
            <div className="main-container">
                    <form> 
                        <div className="fname">
                        <label>First Name:
                        <input type="text"/></label>
                        </div>
                        <div className="lname">
                            <label>Last Name: 
                            <input type="text"/></label> 
                        </div> 
                        <div className="email">
                            <label>Email: 
                            <input type="email"/></label> 
                        </div>
                        <div className="address">
                            <label>Address: 
                            <input type="text"/></label>
                        </div> 
                        <div className="city">
                            <label>City: 
                            <input type="text"/></label>
                        </div> 
                        <div className="state">
                            <label>State: 
                            <input type="text"/></label>
                        </div> 
                        <div className="password">
                            <label>Password: 
                            <input type="password"/></label>
                        </div> 
                        <div className="cpassword">
                            <label>Confirm: 
                            <input type="password"/></label>
                        </div> 
                        <Link to={"/new"}><button className="signupbutton">Sign up</button></Link>
                    </form>
            </div>
        </div>
    
    )    
}


export default RegistrationForm
