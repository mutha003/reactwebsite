import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/1.jpg";


const Common =(props)=>{
    return (
        <>
        <section>
        <h1> {props.name}  <br/> <strong className="brand">Tech World </strong> </h1>
        <p>we are build the website for store & Business</p>
        <NavLink to={props.visit} className="btn"> {props.btname}</NavLink>
        <div className="img-com">
        <img  src={props.imgsrc} className="img-fluid animated" alt="image"/>
        </div>


        </section>
        </>   
        )
}

export default Common;