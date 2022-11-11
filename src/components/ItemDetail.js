import React, {useState,useEffect} from 'react';
import "./styles/itemdetail.scss"
export default function ItemDetail({productData, currentProduct}) {
  

// problem: first image is able to zoom but others stay small
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMainPic(currentProduct.images[0])
  }, [currentProduct]);


  const [mainPic, setMainPic] = useState(currentProduct.images[0])
  const [imageModel, setImageModel] = useState(false)

  function changePic(e) {
    setMainPic(e.target.src)
  }

  function imagePop() {
    setImageModel(!imageModel)
  } 
  return<section className='main'>
     <section className='img-section'>
      <div className="main-img-div">
             
                <img /* onClick={imagePop} */ className={`main-pic`} alt="" src={mainPic}/>
         
            <span className={`img-popup ${imageModel ? "img-active" : ""}`}>
            <img onClick={imagePop} className={` ${imageModel ? "img-active-resize" : ""}`} alt="" src={mainPic}/>
            </span>
            </div>
            <div className="bottom-pics">
            <div className="pics-container">
               <img onClick={changePic} onMouseOver={changePic} src={currentProduct.images[0]} alt=""/>
               <img onClick={changePic} onMouseOver={changePic} src={currentProduct.images[1]} alt=""/>
               <img onClick={changePic} onMouseOver={changePic} src={currentProduct.images[2]} alt=""/>
    
            </div>
            </div>
    </section>
  

   <section className='product-text'>
    <h3> HIGHLY RATED PRODUCT</h3>
    <h1> {currentProduct.name} </h1>
    <p>{currentProduct.description}</p>
    <span> ${currentProduct.price}</span>
    <div className="buttons">
    <span className='quantity'>
      <button  className="minus">-</button>
                  <p>1</p>
                  <button>+</button>
    </span>
    <button className="add-cart">Add to cart</button>
    </div>
   </section>
  </section>
}
