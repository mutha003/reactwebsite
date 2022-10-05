import React from "react";
import Common from "./Common";
import con from "../src/images/2.jpg"

const About =()=>{
    return (
        <Common
        name="Welcome to About page"
        imgsrc={con}
        visit="./contact"
        btname="Contact Now"
        />
    )
}

export default About;