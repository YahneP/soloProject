import React from 'react'
import { Link } from "react-router-dom"; 


const UserOptions = (props) => {
    return (
        <div className='user-body'>
            <div className='options-title'><h1>Quick Options</h1></div>
                <div className='user-container'>
                    
                    <div className="topnav">
                        <a href="/">Home</a>
                        <a href="/new">Order</a>
                        <a href="/useraccount">Account</a>
                        <a href="#logout">Logout</a> 
                    </div>  
                    <div id='leftbox'>
                        <p>Take a Chance on our delicious pizza!! We have a lot of good flavors to offer. Just click the link below and satify your taste buds.</p>
                        <Link to={"/new"}><button className='leftbox-button'>New Order</button></Link>
                    </div>
                    <div id='middlebox'>
                        <p>Welcome back! Let reOrder your favorite meals and get it ready for you! Just click the link below to get started.</p>
                        <Link to={"/new"}><button className='middlebox-button'>Re-Order My Fave</button></Link>
                    </div>
                    <div id='rightbox'>
                        <p>Let us choose for you! We will not let you down. You and your family will be coming back for more, TRUST US!!</p>
                        <Link to={"/new"}><button className='rightbox-button'>Surprise Me</button></Link>
                    </div>      
                </div>
        </div>
    )
}

export default UserOptions
