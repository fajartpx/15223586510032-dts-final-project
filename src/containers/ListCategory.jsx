import React from "react";
import '../style/listcategory.css'
import JsonFood from '../data/food.json'
import ListCategoryCard from "./ListCategoryCard";
import ListItemCard from "./ListItemCard";
import {Link} from 'react-router-dom';
import '../style/ListItem.css'


const Listcategory =(props)=> {
    // const x = JsonFood.menu;
    // x.map((e)=>{
    //         console.log(e.category)
    //     })

    
    return(
        <div className="box dua">
            {/* <p>Container List Caegory</p> */}
            <div style={{display:'flex',flexDirection:'row', fontSize:'10px', marginTop:'100px'}}>
             {/* {JsonFood.menu.slice(-6).map((food)=>{
                 return <ListCategoryCard key={food.category} propsFood={food} />
            })} */}
            {<Link style={{textDecoration:'none'}} to="/Burger" > <ListCategoryCard key={JsonFood.menu[0]} propsFood={JsonFood.menu[0]}/> </Link>} 
            {<Link style={{textDecoration:'none'}} to="/Pizza" > <ListCategoryCard key={JsonFood.menu[9]} propsFood={JsonFood.menu[9]}/> </Link>} 
            {<Link  style={{textDecoration:'none'}}to="/Pasta" > <ListCategoryCard key={JsonFood.menu[17]} propsFood={JsonFood.menu[17]}/> </Link>} 
            {<Link style={{textDecoration:'none'}}to="/Dessert" > <ListCategoryCard key={JsonFood.menu[25]} propsFood={JsonFood.menu[25]}/> </Link>} 
            {<Link style={{textDecoration:'none'}} to="/Rice" > <ListCategoryCard key={JsonFood.menu[33]} propsFood={JsonFood.menu[33]}/> </Link>} 
            {<Link style={{textDecoration:'none'}} to="/Lumpia" > <ListCategoryCard key={JsonFood.menu[47]} propsFood={JsonFood.menu[47]}/> </Link>} 
           
            </div>
     
                <div className="Container" style={
                    {display:'flex', flexDirection:'row', 
                    margin:'0 100px',
                    justifyContent : 'center', alignItems :'center', marginBottom:'100px' }}>
                {JsonFood.menu.filter((food)=> food.category === props.select).map((food)=> {
                    return <ListItemCard key={food.id} propsFood={food}/>
                })}
                </div>
                
       
           
        </div>
    )
}

export default Listcategory;