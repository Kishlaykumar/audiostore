import React, {useEffect} from 'react'
import "./styles/hero.scss"
import { Link } from 'react-router-dom'

export default function Hero({setCurrentProduct, productData, currentProduct}) {
  function changeProduct() {
    setCurrentProduct(productData[0].productOne)
  }
    return (
        <div className='hero'>
           <div className='hero-text'>
            <h4>FEATURED PRODUCT</h4>
            <h1>XX99 MARK II <br/> 
            HEADPHONES</h1>

            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. </p>
            <Link className='button' to={"/store-fm/product/XX99markII"} onClick={changeProduct}> See Product</Link>
           </div>
        </div>
    )
}
