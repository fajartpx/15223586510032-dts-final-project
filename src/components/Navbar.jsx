import React from "react";
import '../style/navbar.css'
import { Link } from "react-router-dom";
 const Navbar =()=> {
    
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#" >Groceries</a>
            </div>
            <ul className="itemNav">
                <li>Browse Groceries</li>
                <li>Basket</li>
                <li>{<Link style={{textDecoration:'none', color:'#ffffff'}} to="/Login"> Login</Link>}</li>
            </ul>
        </nav>
    )
 }

 export default Navbar;