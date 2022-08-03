import React from "react";
import '../style/navbar.css'
 const Navbar =()=> {
    
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#" >Groceries</a>
            </div>
            <ul className="itemNav">
                <li>Browse Groceries</li>
                <li>Basket</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
 }

 export default Navbar;