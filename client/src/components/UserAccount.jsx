import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';   

const UserAccount = (props) => {
    const {allPizzas, setAllPizzas} = props;
    const navigate = useNavigate()
    const {_id} = useParams();

    const [newPizzas, setNewPizzas] = useState({method:"", size:"", crust:"", qty:"", toppings:""})
    const [errors, setErrors]= useState([]);
    const data=["CarryOut", "Delivery"];
    const sizelist=["Small", "Medium", "Large"]
    const crustlist=["Thin Crust", "Regular Crust","Thick Crust", "Cheese Crust"]
    const qtylist=["1", "2", "3", "4", "5", "6"]
    const toppingslist=["Cheese", "Pepperoni", "Beef", "Sausage", "Buffalo Chicken","Veggie", "Mushroom", "Oxtail"]

            const editPizzaHandler = e => {
                e.preventDefault();
                const editPizza = {...newPizzas}
                axios.put(`http://localhost:8000/api/pizzaShop/${_id}`, editPizza)
                .then(res => {
                    console.log (res.data)
                    // setAllPizzas([...allPizzas, res.data]);
                    navigate("/cart");       
                })
            .catch( err => {
                console.log(err.response.data);
                const errArray = []
                for (const key of Object.keys(err.response.data.errors)) {
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray);

            });
    } 

    return (
        <div className='edit-body'>
            <div className='edit-title'><h1>Edit Pizza Order</h1></div>

            <form className="edit-main" onSubmit={editPizzaHandler}> 
                    <div className='dropDownMethods'>
                            <label htmlFor="data"> Method:</label>
                            <input list= "data" value={newPizzas.method} onChange={(e)=>setNewPizzas({...newPizzas, method: e.target.value})} placeholder=''/> 
                            <datalist id='data'>
                                {data.map((op)=><option>{op}</option>)}
                            </datalist>    
                    </div>
                    <div className='dropDownSize'>
                            <label htmlFor="sizelist"> Size:</label>
                            <input list= "sizelist"  value={newPizzas.size} onChange={(e)=>setNewPizzas({...newPizzas, size: e.target.value})} placeholder=''/>
                            <datalist id='sizelist'>
                                {sizelist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownCrust'>
                            <label htmlFor="crustlist"> Crust:</label>
                            <input list= "crustlist"  value={newPizzas.crust} onChange={(e)=>setNewPizzas({...newPizzas, crust: e.target.value})} placeholder=''/>
                            <datalist id='crustlist'>
                                {crustlist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownQty'>
                            <label htmlFor="qtylist"> Qty:</label>
                            <input list= "qtylist"  value={newPizzas.qty} onChange={(e)=>setNewPizzas({...newPizzas, qty: e.target.value})} placeholder=''/>
                            <datalist id='qtylist'>
                                {qtylist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>

                        <div className='dropDownToppings'>
                            <label htmlFor="toppingslist"> Toppings:</label>
                            <input list= "toppingslist"  value={newPizzas.toppings} onChange={(e)=>setNewPizzas({...newPizzas, toppings: e.target.value})} placeholder=''/>
                            <datalist id='toppingslist'>
                                {toppingslist.map((op)=><option>{op}</option>)}
                            </datalist>    
                        </div>
                <button className="updatebutton">Update</button>
                <div class="topnav">
                    <a href="/">Home</a>
                    <a href="/new">Order</a>
                    <a href="/useraccount">Account</a>
                    <a href="#logout">Logout</a>
                </div> 
            </form>
        </div>
    )
}


export default UserAccount
