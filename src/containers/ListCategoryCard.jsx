import React from "react";
import '../style/ListCategoryCard.css'


const ListCategoryCard =({propsFood,tekan})=>{


    return (
        <>
        
        <div key={propsFood.key} >
        <div className="box" onClick={()=>tekan()} >
        <img style={{width:'100px', height:'100px', borderRadius:'100px'}} src={propsFood.image} />
        <h3 >{propsFood.category}</h3>
        </div>
       
         </div>
             
        {/* <div className="Category" key={propsFood.key}>
  
        <Link className="box" to="/Pizza"><img style={{width:'100px', height:'100px', borderRadius:'100px'}} src={propsFood.image} />
        <h1>{propsFood.category}</h1></Link>
        
    
        </div> */}
           
        </>
    )
}

export default ListCategoryCard;