import React from "react";
import "./frontpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import  Carousel  from "react-bootstrap/Carousel";

import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/sliade3.jpg"




function Home(){
    return(
        <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    ></img>
    <Carousel.Caption>
      <h3>Chiken Leg Peice</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
      ></img>

    <Carousel.Caption>
      <h3>Moton Boti</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
      ></img>
    <Carousel.Caption>
      <h3>Burger's</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div>
    <br></br>
    <br></br>
   
    
</div>


<div>


<div class="card">
	<h1>Tikka</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide1} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Matton</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide2} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Burger</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide3} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Tikka</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide1} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Matton</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide2} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>burger</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide3} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Matton</h1>
	<p>place your order</p>
  <img classname="imggg" src={slide2} style={{height:100,width:207}}></img>
</div><div class="card">
	<h1>Tikka</h1>
	<p>place your order</p>
  <img classname="imggg"  src={slide1} style={{height:100,width:207}}></img>
</div>

</div>


<div>

<div class="Spiner3"></div>

<h1> A Pen By: ShariqMehmood</h1>
</div>

<br></br>
    <br></br>

<div>
<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Book your Hotel in New York NY online. No reservation costs. Great rates. Bed and Breakfasts. Hotels. 24/7 Customer Service. Best Price Guarantee. Apartments. Hostels. We speak your language. Villas. Secure Booking. No Booking Fees. Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a >Dish</a></li>
              <li><a >Cities</a></li>
              <li><a >Resturnant</a></li>
              <li><a >
                Devlery</a></li>
              <li><a >hotel</a></li>
              <li><a >order</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a >About Us</a></li>
              <li><a >Contact Us</a></li>
              <li><a >Contribute</a></li>
              <li><a >Privacy Policy</a></li>
              <li><a >Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">ShariqMehmood</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</div>





        </>
    )
}

export default Home;