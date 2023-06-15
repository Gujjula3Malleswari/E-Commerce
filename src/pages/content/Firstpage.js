import React from 'react'
import electronics from ".pages/content/assets/products/electronics.webp"
import fashion from ".pages/content/assets/products/fashion.webp";
import flights from  ".pages/content/assets/products/flights.webp";
import mobilesandtablets from "..pages/content/assets/products/mobilesandtablets.webp"
import saree from".pages/content/assets/products/sarees.jpg"
import saree1 from ".pages/content/assets/products/saree1.jpg"
import "./Firstpage.css"
import furniture from ".pages/content/assets/products/furniture.webp"
import tv from ".pages/content/assets/products/tv.webp"
import beauty from ".pages/content/assets/products/beauty.webp"
import fan from ".pages/content/assets/products/Fan.webp"
import grocery from ".pages/content/assets/products/grocery.webp"
import Bag from ".pages/content/assets/products/bag.webp"
function Firstpage() {
  return (
    <section className='flip'>
    <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={electronics} alt="online"/>
      <p>Electronics</p>
    </div>
    <div class="flip-box-back">
      <img src={fashion} alt="online"/>
      <p>Fashion</p>
    </div>
  </div>
  </div>
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={mobilesandtablets} alt="online"/>
      <p>Mobiles&Tablets</p>
    </div>
    <div class="flip-box-back">
      <img src={flights} alt="online"/>
      <p>Flights</p>
    </div>
  </div>
  </div>
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={beauty} alt="online"/>
      <p>Beauty</p>
    </div>
    <div class="flip-box-back">
      <img src={Bag} alt="online"/>
      <p>Bag</p>
    </div>
  </div>
  </div>
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={fashion} alt="online"/>
      <p>Fashion</p>
    </div>
    <div class="flip-box-back">
      <img src={mobilesandtablets} alt="online"/>
      <p>Mobiles&Tablets</p>
    </div>
  </div>
  </div>
  
  
  
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={grocery} alt="online"/>
      <p>Grocery</p>
    </div>
    <div class="flip-box-back">
      <img src={flights} alt="online"/>
      <p>Flights</p>
    </div>
  </div>
  </div>
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={furniture} alt="online"/>
      <p>Furniture</p>
    </div>
    <div class="flip-box-back">
      <img src={flights} alt="online"/>
      <p>Flights</p>
    </div>
  </div>
  </div>
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={tv} alt="online"/>
      <p>TV</p>
    </div>
    <div class="flip-box-back">
      <img src={flights} alt="online"/>
      <p>Flights</p>
    </div>
  </div>
  </div>
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={saree} alt="online"/>
      <p>Tradition</p>
    </div>
    <div class="flip-box-back">
      <img src={saree1} alt="online"/>
      <p>silk</p>
    </div>
  </div>
</div>
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={fan} alt="online"/>
      <p>Fan</p>
    </div>
    <div class="flip-box-back">
      <img src={beauty} alt="online"/>
      <p>Beauty</p>
    </div>
  </div>
  </div>
</section>

    
    
  )
}
export default Firstpage