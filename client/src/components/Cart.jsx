import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cart = (props) => {
    const {allPizzas, setAllPizzas} = props;
    const navigate = useNavigate();
    // const {_id} = useParams();
    const [pizzaList, setPizzaList] = useState({method:"", size:"", crust:"", qty:"", toppings:""})

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pizzashop/')
        .then( res => {
            console.log(res.data);
            setAllPizzas(res.data)
            })
            .catch( err => console.log(err));
        }, [])
        
        const deleteOrderHandler = e => {
            // const id = e.target.value;
            axios.delete(`http://localhost:8000/api/pizzaShop/${e}`)
            .then( res => {
                const filteredPizza = allPizzas.filter( pizzaList => pizzaList._id !== e)
                setAllPizzas (filteredPizza);
                // navigate("/movies")
            })
            .catch ((err) => console.log (err))
    
        }
    
    
    return (
        <div className='cart-body'>
            <div className='cart-title'><h1>Your Order</h1></div>
            <div className='cart-main'>

                <form>
                    <div className="topnav">
                        <a href="/">Home</a>
                        <a href="/new">Order</a>
                        <a href="/useraccount">Account</a>
                        <a href="#logout">Logout</a>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Method</th>
                            <th>Size</th>
                            <th>Crust</th>
                            <th>Qty</th>
                            <th>Toppings</th>
                        </tr>
                        {
                            allPizzas.map( pizzaList => {
                                return (
                                    <tr key={pizzaList._id}>
                                        <td>{pizzaList.method}</td>
                                        <td>{pizzaList.size}</td>
                                        <td>{pizzaList.crust}</td>
                                        <td>{pizzaList.qty}</td>
                                        <td>{pizzaList.toppings}</td>
                                        {deleteOrderHandler}
                                        <td><button><Link to={`/useraccount/${pizzaList._id}`}>edit</Link></button><button onClick={()=>deleteOrderHandler(pizzaList._id)}>delete</button></td>
                                    </tr>
                                                        
                                )
                            })

                        }
                        </tbody>
                    </table>
                    
                    {/* <Link to={"/stores/34a0cb1"} ><button>Can't find a Store</button></Link> */}
                </form> 
            </div>
        </div>
    );
}



export default Cart
