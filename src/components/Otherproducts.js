import React from 'react'
import "./styles/otherproducts.scss"
import { Link } from 'react-router-dom';
export default function Otherproducts({productData, currentProduct, setCurrentProduct}) {

//  need a specific url for products??  


    const keys = productData.map(el => {
        for(var key in el) {
          var valuePairs = el[key];
      }
      return valuePairs
      });
      // this returns objects each with the key and values of productOne-Five

      
      //this is returning that div if product.name does not equal currentproduct.name
    const products =  keys.map(product => {
        if (!product.name.includes(currentProduct.name)){
            return   <div className='other-card'  key={product.name}>
                <div className='img-div'>    <img alt='product' src={product.images[0]} />    </div>
              <h4>  {product.name}  </h4>
              <Link onClick={() => setCurrentProduct(product)} to={`/store-fm/product/${product.name}`} className='button'>See Product</Link>
              </div>
        }
       else{
         return null
       }
    })
   
  return (
    <section className='other-section'> 
    <h3>YOU MAY ALSO LIKE:</h3>
    <section className='other-card-section'>
      {products}
    </section>
    </section>
  )
}
