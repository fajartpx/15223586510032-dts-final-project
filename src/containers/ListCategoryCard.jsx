import React from "react";
import '../style/listcategory.css'


const ListCategoryCard =({propsFood})=>{


    return (
        <>
        <div className="Category" key={propsFood.key}>
        <div className="box" >
        <img style={{width:'100px', height:'100px', borderRadius:'100px'}} src={propsFood.image} />
        <h1 >{propsFood.category}</h1>
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