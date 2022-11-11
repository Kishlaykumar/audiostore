import React from 'react'
import "./styles/speakerblocktwo.scss"
import { Link } from 'react-router-dom'
export default function speakerblocktwo({setCurrentProduct, productData, currentProduct}) {
    function changeProduct() {
        setCurrentProduct(productData[2].productThree)
    }
    return (
        <div className='block-two'>
            <div className='block-two-text'>
                <h1>ZX7 Speaker</h1>
                <Link className='button' onClick={changeProduct} to={"/store-fm/product/zx7-speaker"}>See Product</Link>
            </div>

            <div className='img-container'>
                
            </div>
        </div>
    )
}
