import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route,Link, Redirect} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from './Home';
import Service from "./Service";
import Navbar from "./Navbar";
// import Footer from "./Footer";



const App =()=>{
  return(
    <>
    <Navbar/>
      
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/service" component={Service}/>
      <Redirect to="/"/>
    </Switch>
   
 
   </>
  );
}

export default App;



