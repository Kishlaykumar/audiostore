import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Speakerblock from '../components/Speakerblock'
import Speakerblocktwo from '../components/speakerblocktwo'
import Earphoneblock from '../components/Earphoneblock'
import Aboutblock from '../components/Aboutblock'
import Footer from '../components/Footer'
export default function Home({setCurrentProduct, productData, currentProduct}) {
    return (
        <div>
            <Navbar/>
            <Hero currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct}/>
            <Speakerblock currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct} />
            <Speakerblocktwo currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct}  />
            <Earphoneblock currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct} />
            <Aboutblock/>
            <Footer/>
        </div>
    )
}
