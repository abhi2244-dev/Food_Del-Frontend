import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'
function Order() {
  const{getTotal}=useContext(StoreContext);
  return (
      <form className='order'>
   <div className="place-order-left">
   <p className='title'>Delivery Information</p>
   <div className="multi-feilds">
    <input type="text" placeholder='first Name' />
    <input type="text" placeholder='last Name' />
   </div>
   <input type="email" placeholder='Email address'/> 
   <input type="text" placeholder='Street' />
    <div className="multi-feilds">
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
   </div>
    <div className="multi-feilds">
    <input type="text" placeholder='Zip code' />
    <input type="text" placeholder='country' />
   </div>
   <input type='text' placeholder='Phone'/>
   </div>
   <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
            <p>{getTotal()}</p></div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotal()===0?0:getTotal()+2}</b>
            </div>
          </div>
           <button>Proceed to Payment</button>
        </div>
   </div>
      </form>

  )
}

export default Order