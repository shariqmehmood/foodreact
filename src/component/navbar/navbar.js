import  React from "react";
import "./navbar.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


function Nabar(){
    return(
      <>
     
     <Navbar bg="dark" variant="dark">
    <Container >
    <Navbar.Brand >Food Panda</Navbar.Brand>
    <Link className="signup" style={{color:"white",textDecoration:"none",justifyContent:"space-between"}} to="/Signup">SignUp</Link>
    </Container>
  </Navbar>
    
     
    </>
  


      
    )
}


export default Nabar;