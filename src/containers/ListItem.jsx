import React from "react";
import JsonFood from '../data/food.json'
import ListItemCard from "./ListItemCard";
import '../style/ListItem.css'


const ListItem =(props)=>{

  
    return(
        <div>
           <div className="Container">
                <div style={
                    {display:'flex', flexDirection:'row', 
                    margin:'0 100px',
                    justifyContent : 'center', alignItems :'center', overflow :'hidden' }}>
                {JsonFood.menu.filter((food)=> food.category == props.select).map((food)=> {
                    return <ListItemCard key={food.id} propsFood={food}/>
                })}
                </div>
                
             
            </div>
        </div>
    )
}

export default ListItem;