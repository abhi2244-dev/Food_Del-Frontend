import React,{useContext} from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../Assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {cartitems,addToCart,removeCart,getTotal}=useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr />
        {food_list.map((item,index)=>{
          if(cartitems[item._id]>0)
          {
            return(
              <div>
              <div className="cart-items-tittle cart-items-item">
                <img src={item.image} alt=''/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>${item.price*cartitems[item._id]}</p>
                <p onClick={()=>{
                  removeCart(item._id)
                }} className="cross">x</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
           <button onClick={()=>navigate('/Order')}>Proceed to check out</button>
        </div>
        <div className="cart-promecode">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart