import React from 'react'
import { PRODUCTS } from '../../MyProducts'
import Product from './Product'
import Meal from '../../images/meal.jpg'
import './shop.css'
const Shop = () => {
  return (
    <>
    {/* main section */}
    <div className='container'>
      <span>  </span>
      {/* <p>Best Meal</p> */}
      <h3 id='heading'>Best Meal In Summer</h3>
      <h2>With 50% OFF.</h2>
      <button id='btn-main'>Know more..</button>
      <img src={Meal} id='meal'/>
    </div>

    {/* menu section */}
    <div className='shop'>
      <div className='titleshop'>
        <h1>My Food</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=> {return(
          <Product data={product}/>
        )})}
      </div>
    </div>
    </>
  )
}

export default Shop