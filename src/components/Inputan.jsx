import React from "react";

const Inputan =(props)=> {

    const {
        type, value, elevation, height,weight, width, backgroundColor, 
        border,color, borderRadius, boxShadow,outline} = props;

    return(
        <>
        <input type={type} value={value} 
        style={{
            height:height,
            weight:weight,
            width:width,
            backgroundColor:backgroundColor,
            border:border,
            borderRadius:borderRadius,
            colot:color,
            elevation:elevation,
            boxShadow:boxShadow,
            outline:outline}} />
        </>
        
    )
}
export default Inputan;