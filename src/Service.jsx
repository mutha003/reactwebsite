import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service =()=>{
    return (
        <>
        <h1 className="ser-h1"> Our Services   </h1>
         <div className="ser-box">
         
      

        
               { Sdata.map((val,index)=>{
                   return(
                       <Card

                       key={index}
                       imgsrc={val.imgsrc}
                       title ={val.title}  
                       />
                   )
               })


               }

        </div>
        </>
            )
}

export default Service;