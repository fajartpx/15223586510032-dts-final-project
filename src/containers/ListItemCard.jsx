import React from "react";
import '../style/ListItem.css'
import Button from '../components/Button'

const ListItemCard =({propsFood})=>{

    return(

            <>
            <div className="Card" key={propsFood.key}>
                    <div>
                    <img src={propsFood.image} />
                    </div>
                    
                    <p className="foodname">{propsFood.name}</p>
                    <p className="foodprice">Rp. {propsFood.price}</p>
                    <Button color='white' 
                            backgroundColor='#E39390' 
                            title='Add to Chart'
                            border='none'
                            padding='6px 6px'
                            borderRadius='6px' />
                    
                    
                </div>
               
            </>
           
            
            
        
    )
}

export default ListItemCard;