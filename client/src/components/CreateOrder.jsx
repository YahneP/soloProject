import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateOrder = (props) => {
    const {allPizzas, setAllPizzas} = props;
    const navigate = useNavigate()

    const [newPizza, setNewPizza] = useState({method:"", size:"", crust:"", qty:"", toppings:""})
    const [errors, setErrors]= useState([]);
// options chooses
    const data=["CarryOut", "Delivery"];
    const sizelist=["Small", "Medium", "Large"]
    const crustlist=["Thin Crust", "Regular Crust","Thick Crust", "Cheese Crust"]
    const qtylist=["1", "2", "3", "4", "5", "6"]
    const toppingslist=["Cheese", "Pepperoni", "Beef", "Sausage", "Buffalo Chicken","Veggie", "Mushroom", "Oxtail"]


    const addPizzaHandler = e => {
        e.preventDefault();
        const onePizza = {...newPizza }
        axios.post("http://localhost:8000/api/pizzaShop", onePizza)
        .then(res => {
            console.log (res.data)
            setAllPizzas([...allPizzas, res.data]);
            navigate("/cart");       
        })
        .catch( err => {
            // console.log(err)
            const errArray = []
            for (const key of Object.keys(err.response.data.errors)) {
                errArray.push(err.response.data.errors[key].message)
            }
            setErrors(errArray);

        });
} 
    return (
        <div className='createOrder-body'>
            <div className='createOrder-title'><h1>Craft-A-Pizza</h1></div>
            <div className='createOrder-main'>

                <form onSubmit={addPizzaHandler}>
                    {
                            errors.map( (err, idx) => {
                                return (
                                    <p key={idx} style={{color: "red"}}>{err}</p>
                                )
                            })
                    }
                    <div className="topnav">
                        <a href="/">Home</a> 
                        <a href="/new">Order</a>
                        <a href="/useraccount">Account</a>
                        <a href="#logout">Logout</a>
                    </div>
                    
                    <div className='new-body'>
                        <div className='dropDownMethods'>
                            <label htmlFor="data"> Method:</label>
                            <input list= "data" value={newPizza.method} onChange={(e)=>setNewPizza({...newPizza, method: e.target.value})} placeholder='CarryOut'/> 
                            <datalist id='data'>
                                {data.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownSize'>
                            <label htmlFor="sizelist"> Size:</label>
                            <input list= "sizelist"  value={newPizza.size} onChange={(e)=>setNewPizza({...newPizza, size: e.target.value})} placeholder='Small'/>
                            <datalist id='sizelist'>
                                {sizelist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownCrust'>
                            <label htmlFor="crustlist"> Crust:</label>
                            <input list= "crustlist"  value={newPizza.crust} onChange={(e)=>setNewPizza({...newPizza, crust: e.target.value})} placeholder='Regular Crust'/>
                            <datalist id='crustlist'>
                                {crustlist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownQty'>
                            <label htmlFor="qtylist"> Qty:</label>
                            <input list= "qtylist"  value={newPizza.qty} onChange={(e)=>setNewPizza({...newPizza, qty: e.target.value})} placeholder='1'/>
                            <datalist id='qtylist'>
                                {qtylist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownToppings'>
                            <label htmlFor="toppingslist"> Toppings:</label>
                            <input list= "toppingslist"  value={newPizza.toppings} onChange={(e)=>setNewPizza({...newPizza, toppings: e.target.value})} placeholder='Cheese'/>
                            <datalist id='toppingslist'>
                                {toppingslist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>
                        <button>Add to Order</button>
                    </div>
                    
            
                </form>    
            </div>

        </div>
    )
}


export default CreateOrder
