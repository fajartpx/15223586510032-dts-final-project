import React from "react";
import Navbar from "../components/Navbar";
import Inputan from "../components/Inputan";
import Button from "../components/Button";
import '../style/Home.css'

const Header =()=> {

    return(
        <>
        <div className="header">
            <Navbar/>
            <div className="intro">
                <p>No 1 costumer goods shopping resource</p>
                <h1>Discover Amazing <br></br>grocery deals <br></br>and save actual money</h1>
                <span>
                <Inputan 
                height='40px' 
                width='600px' 
                border='3px solid #e0e0e0' 
                borderRadius='10px 0 0 10px'
                elevation='50px' 
                boxShadow='0px 1px 40px #888888'
                outline='none'
                />
                <Button
                title='Search'
                color='#ffffff'
                border='none'
                backgroundColor='#1AB031'
                height='50px'
                width='80px'
                borderRadius='0px 10px 10px 0px'
                />
        </span>
            </div>
        </div>
    
        </>
    )  
}

export default Header;