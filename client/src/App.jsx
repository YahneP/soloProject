import './App.css'
import React, {useState, useEffect}  from 'react'
import Dashboard from './components/Dashboard'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import RegistrationForm from './components/RegistrationForm'
import Login from './components/Login'
import UserOptions from './components/UserOptions'
import UserAccount from './components/UserAccount'
import CreateOrder from './components/CreateOrder'
import Cart from './components/Cart'
import axios from 'axios'

function App() {

  const [allPizzas, setAllPizzas] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/pizzaShop')
          .then( res => setAllPizzas(res.data))
          .catch( err => console(err));
          
  }, [])
  return (
      <div> 
          <header><h3>Chance's Pizza</h3></header>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Dashboard allPizzas={allPizzas} setAllPizzas={setAllPizzas} />} />
                  <Route path={"/register"} element={<RegistrationForm/>}/>
                  <Route path={"/login"} element={<Login/>} />
                  <Route path={"/useroptions"} element={<UserOptions allPizzas={allPizzas} setAllPizzas={setAllPizzas} />}/>
                  <Route path={"/useraccount/:_id"} element={<UserAccount allPizzas={allPizzas} setAllPizzas={setAllPizzas} />} />
                  <Route path={"/new"} element={<CreateOrder allPizzas={allPizzas} setAllPizzas={setAllPizzas} />} />
                  <Route path={"/cart"} element={<Cart allPizzas={allPizzas} setAllPizzas={setAllPizzas} />} />
                  
              </Routes>
          </BrowserRouter>
      </div> 
  )
}


export default App
