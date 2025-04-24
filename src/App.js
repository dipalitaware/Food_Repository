import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import SwiggyCorporate from './component/SwiggyCorporate';
import Offers from './component/Offers';
import SignIn from './component/SignIn';
import Cart from './component/Cart';
import Help from './component/Help';
import {Container,Navbar,Nav, NavDropdown,Image, Form,Row, Col, Button, Card} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import BiryaniForm from './component/BiryaniForm';

function App() {
  return (

    <div>
                     
            <div>
                <Navbar  bg="dark" expand="lg" className="bg-body-tertiary Navbar-font-size cust-main-div">       
                    <Container>
                            <img src='swiggy_icon.jpeg' className='img-icon zoom'/>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text nav-align">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/swiggy-corporate">Swiggy Corporate</Nav.Link>
                               
                                <Nav.Link href="/offers" className="badge-span">Offers
                                <span class="cust-badge badge">New</span>
                                
                                </Nav.Link>

                                <Nav.Link href="/sign-in">Sign In</Nav.Link>
                                <Nav.Link href="/help">Help</Nav.Link>
                                <Nav.Link href="/cart">Cart</Nav.Link> 
                            </Nav>
                        </Navbar.Collapse>

            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>

          </Container>
            </Navbar>
        <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/swiggy-corporate" element={<SwiggyCorporate/>} />
              <Route path="/offers" element={<Offers/>} />
              <Route path="/sign-in" element={<SignIn/>} />
              <Route path="/help" element={<Help/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/biryani-form" element={<BiryaniForm/>} />
          </Routes>
        </BrowserRouter>
      </div>

        
                    
        
    </div>
   
  );
}

export default App;
