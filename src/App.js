import React, { useState } from 'react'
import Navbar from'./components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PllaceOrder/Order'
import StoreContextProvider from './context/StoreContext';
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

function App() {
  const [showlogin,setshowlogin]=useState(false)
  return (
    <>
  {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
  <div className='App'>
    <Navbar setshowlogin={setshowlogin}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>  
         <Route path='/Order' element={<Order/>}></Route>
    </Routes>
  </div>
   <Footer/>
  </>
  )
}

export default App
