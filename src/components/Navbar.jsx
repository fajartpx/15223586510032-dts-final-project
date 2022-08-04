import React from "react";
import '../style/navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Button from "./Button";

const Navbar =()=> {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#" >Groceries</a>
            </div>
            <ul className="itemNav">
                <li>Browse Groceries</li>
                <li>Welcome: {user.email}</li>
                {/* <li>{<Link style={{textDecoration:'none', color:'#ffffff'}} to="/Login"> Login</Link>}</li> */}
                <li><button onClick={()=>onLogout()}>Log Out</button></li>
            </ul>
        </nav>
    )
 }

 export default Navbar;