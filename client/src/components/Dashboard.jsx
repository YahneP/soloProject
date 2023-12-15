import React,{useState, useEffect}  from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Dashboard = ({newPizza, setNewPizza}) => {
    const [method, setMethod] = useState("");
    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [qty, setQty] = useState("");
    const [toppings, setToppings] = useState("");
    const navigate = useNavigate
        
    const updateStoreHandler = e => {
        e.preventDefault();
        const onePizza = { newPizza, setNewPizza }
        axios.get("http://localhost:8000/api/pizzashop/:id", onePizza)
        .then(res => {
            setNewPizza([...newPizza, res.data]);
            navigate("/");
                    
        })
    } 

    return (
        <div className='home-body'>
            <div class="topnav">
                    <a href="/">Home</a>
                    <a href="/new">Order</a>
                    <a href="/useraccount">Account</a>
                    <a href="#logout">Logout</a>
            </div> 
            <div className='home-title'><h1>Welcome to Chance's Pizza!</h1></div>
            
            <Link className='homebutton' to={"/login"}><button>Log In</button></Link>
            <Link className='homesignupbutton' to={"/register"}><button>Sign Up</button></Link>

            <div className='home-main'>
                <form onSubmit={updateStoreHandler}>
                        
                        {/* <div>
                            <h4>Method:</h4>
                            <input type="text" value={method} onChange={ e => method(e.target.value)}/>
                        </div>
                        <div>
                            <h4>Size:</h4>
                            <input type="number" value={size} onChange={ e => size(e.target.value)}/>
                        </div> */}

                        
                </form> 
            </div>  
        </div>
    )
}

export default Dashboard
