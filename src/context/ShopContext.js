import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../MyProducts';
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
  let cart={}
  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0
  }
  return cart;
}


const ShopContextProvider = (props) => {
  const [cartItem,setCartItem]=useState(getDefaultCart())

  const getTotalCartAmount=()=>{
    let totalamount=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let itemInfo=PRODUCTS.find((product)=>product.id === Number(item));
        totalamount += cartItem[item]=itemInfo.price;
      }
    }
    return totalamount
  }

  const addTocart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  }
  const removetocart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }

  const updateCartItemCount=(newAmount,itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:newAmount}))
  }

  const contextvalue={cartItem,addTocart,removetocart,updateCartItemCount,getTotalCartAmount}
  // console.log(cartItem)
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default  ShopContextProvider;