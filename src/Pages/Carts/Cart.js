import React,{useContext} from 'react'
import {  useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../../MyProducts'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'
const Cart = () => {
  const {cartItem,getTotalCartAmount}=useContext(ShopContext);
  const totalamount=getTotalCartAmount()
  const usenavigate=useNavigate()
  return (
    <>
    
    <div className='cart'>
      <div><h1>Your Cart</h1></div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItem[product.id]!==0){
            return <CartItem data={product} />
          }
        })}
      </div>
      <div className='checkout'>
        
            <p>Total:${totalamount}</p>
            <button onClick={()=>usenavigate("/")}>Shopping Continue</button>
            <button>Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Cart