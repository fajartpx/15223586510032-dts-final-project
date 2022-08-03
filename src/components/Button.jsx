import React from "react";


const Button = (props)=>{

    const {type,padding,backgroundColor,color, width, height, title, border, borderRadius} =props;

    return(
        <button style={
            {backgroundColor:backgroundColor,
            color:color,
            width:width,
            height:height,
            border:border,
            borderRadius:borderRadius,
            padding:padding
            }}>{title}</button>
    )
}

export default Button;