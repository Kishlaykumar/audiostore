import React from 'react'
 import "./styles/earphoneblock.scss"
 import { Link } from 'react-router-dom'
export default function Earphoneblock({setCurrentProduct, productData, currentProduct}) {
    function changeProduct() {
        setCurrentProduct(productData[3].productFour)
    }
    return (
        <div className='block-three'>
           <div className='img'>
               
           </div>

           <div className='block-three-text'>
               <h1>XY1 Earphones</h1>
               <Link className='button' to={"/store-fm/product/xy1-earphones"} onClick={changeProduct}>See Product</Link>
           </div>
        </div>
    )
}
