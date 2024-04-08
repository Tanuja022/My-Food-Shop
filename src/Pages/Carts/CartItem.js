import { useContext } from 'react'
import React from 'react'
import { ShopContext } from '../../context/ShopContext'

const CartItem = (props) => {
    const {id,name,price,foodimage}=props.data;
    const {cartItem,addTocart,removetocart,updateCartItemCount}=useContext(ShopContext);
  return (
    <>
    <div className='cartItem'>
        <img src={foodimage} />
        <div className='description'>
            <p>{name}</p>
            <p>{price}</p>
            <div className='counthandler'>
              <button onClick={()=>removetocart(id)}>-</button>
              <input value={cartItem[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
              <button onClick={()=>addTocart(id)}>+</button>
            </div>

         </div>
        
    </div>
    
    </>
  )
}

export default CartItem