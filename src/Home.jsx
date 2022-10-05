import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/1.jpg";
import Common from "./Common";


const Home =()=>{
    return (
        <>
        <Common
        name="Grow Your Business Online Website "
        imgsrc={web}
        visit="./service"
        btname="Get Started"
        />

        </>   
        )
}

export default Home;