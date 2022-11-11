import React from 'react'
import "./styles/speakerblock.scss"
import ZX9 from "../assets/home/desktop/image-speaker-zx9.png"
import { Link } from 'react-router-dom'
export default function Speakerblock({setCurrentProduct, productData, currentProduct}) {
    function changeProduct() {
        setCurrentProduct(productData[1].productTwo)
    }
    return (
        <div className='speaker-block'>
            <div className='img-container'><img alt="speaker" src={ZX9}/></div>

            <div className='speaker-block-text'>
                <h1>ZX9 Speaker</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link to={"/store-fm/product/ZX9%Speaker"}className='button' onClick={changeProduct}>See Product</Link>
            </div>
        </div>
    )
}

