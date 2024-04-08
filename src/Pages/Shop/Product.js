import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext';

const Product = (props) => {
    const {id,name,price,foodimage}=props.data;
    const {addTocart,cartItem}=useContext(ShopContext);

    const cartItemAmount=cartItem[id]

  return (
    <div className='product'>
        <img src={foodimage} />
        <div className='nameproduct'>
            <h1><b>{name}</b></h1>
        </div>
        <div className='foodprice'>
            <h3>RS.{price}</h3>
        </div>
        <button className='addtocart' onClick={()=>addTocart(id)} >
            Add To cart{cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product