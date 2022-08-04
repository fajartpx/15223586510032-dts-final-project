import React from "react";


const Button = (props)=>{

    const {onSubmit,type,padding,backgroundColor,color, width, height, title, border, borderRadius} =props;

    return(
        <button style={
            {backgroundColor:backgroundColor,
            color:color,
            width:width,
            height:height,
            border:border,
            borderRadius:borderRadius,
            padding:padding,
            type:type
            }} 
           
            >{title}</button>
    )
}

export default Button;