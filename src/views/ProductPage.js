import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aboutblock from '../components/Aboutblock';
import ItemDetail from '../components/ItemDetail';
import Features from '../components/Features';
import Otherproducts from '../components/Otherproducts';
export default function ProductPage({productData, currentProduct, setCurrentProduct}) {
  return <div>

    <Navbar/>
    <ItemDetail currentProduct={currentProduct} productData={productData}/>
    <Features />
    <Otherproducts currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct} />
    <Aboutblock/>
    <Footer/>
  </div>;
}
