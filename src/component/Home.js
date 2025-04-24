import React, {Component} from 'react';
import {Nav,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
const Home = () => {


        return (
                <>
                <div className="Navbar-font-size">What's on your mind?</div>
                		<div className="div-img div-align"> 
                			<div >
                				<Link to="/biryani-form">
                					<img src="biryani.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="burgers.js">
                					<img src="burgers.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="pizzas.js">
                					<img src="pizzas.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="northIndian.js">
                					<img src="northIndian.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="chinese.js">
                					<img src="chinese.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="cakes.js">
                					<img src="cakes.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="rolls.js">
                					<img src="rolls.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="salad.js">
                					<img src="salad.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="paratha.js">
                					<img src="paratha.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>

                			<div >
                				<Link to="southIndian.js">
                					<img src="southIndian.jpeg" className="menu-img-size img-zoom"/>
                				</Link>
                			</div>
                		</div>
                		
                		<div className="div-img">
                			<div >
                				<img src="khichadi.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="pasta.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="icecream.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="dosa.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="noodles.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="pureVeg.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="choleBhature.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="shawarma.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="pavBhaji.jpeg" className="menu-img-size"/>
                			</div>
                			<div >
                				<img src="idli.jpeg" className="menu-img-size"/>
                			</div>
                			
                		</div>
                	
                </>
        );
  };

export default Home;