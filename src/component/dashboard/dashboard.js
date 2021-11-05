import React from "react";
import "./dashboard.css"
import  {Link, useHistory}  from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import  NavDropdown  from "react-bootstrap/NavDropdown";





function Dashboard(){
  
    const history=useHistory()
    return(
        <div>
            


            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  onClick={()=>{history.push("/")}}>Home</Nav.Link>
        
        <NavDropdown title="Acton Of Admin" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>{history.push("/AddDish")}}>AddDish</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={()=>{history.push("/AllDish")}}>AllDIsh</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={()=>{history.push("/Allorder")}}>AllOrders</NavDropdown.Item>
          <NavDropdown.Divider /> 
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<h1 style={{color:"white",textAlign:"center"}}> WelCome in Dashboard</h1>

            
        </div>

           

      
    )
}
export default Dashboard;