import {BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import './App.css';
import Home from "./views/Home.js";
import {useState, useEffect} from "react"
import ProductPage from "./views/ProductPage";


function App() {

  //todo: deploy issues - photos from state not showing (local works gh does not) /  Link to shopify checkout  
  // find other products / shopping cart functionality / side photo? /  cart 

  const [productData, setProductData] = useState([
    {productOne: {
      name: "XX99 Mark II headphones",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      images: ["https://github.com/Ebmnm/store-fm/blob/master/public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg?raw=true",
      "/store-fm/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      "/store-fm/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"],
      price: 500,
      id: 0
  
    }},
    {productTwo: {
      name: "ZX9 Speaker",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      images: ["/store-fm/assets/product-zx9-speaker/desktop/image-product.jpg",
      "/store-fm/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      "/store-fm/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"],
      price: 3500,
      id: 1
    
    }},
    {productThree: {
      name: "ZX7 Speaker",
      description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      images: ["/store-fm/assets/product-zx7-speaker/desktop/image-product.jpg",
      "/store-fm/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      "/store-fm/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"],
      price: 2500,
      id: 2,
      
    }},
    {productFour: {
      name: "YX1 Earphones",
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      images: ["/store-fm/assets/product-yx1-earphones/desktop/image-product.jpg",
      "/store-fm/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
      "/store-fm/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"],
      price: 549,
      id: 3,
      
    }}
  ])



    const data = JSON.parse(localStorage.getItem('currentProduct') || "[]")

const [currentProduct, setCurrentProduct] = useState(data)



/* useEffect(() => {
  const data = localStorage.getItem('currentProduct')
  if (data) { 
    setCurrentProduct(JSON.parse(data))
  } 
}, []);  WRONG WAY*/

useEffect(() => {
  localStorage.setItem('currentProduct', JSON.stringify(currentProduct));
}, [currentProduct]); 

  return (
    
     <Router>
       <Routes>
         
            <Route path="/store-fm" exact element={<Home currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} productData={productData} />} />
            <Route path="/store-fm/product/:id"  element={ <ProductPage currentProduct={currentProduct} productData={productData} setCurrentProduct={setCurrentProduct}/>} />
         
       </Routes>
     </Router>


    
       
  );
}

export default App;
