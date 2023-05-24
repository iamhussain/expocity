import "./styles/index.css";
import "./index.js"
import { Carousel, Select, Collapse, Input, Datepicker, initTE } from "tw-elements";

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
      console.log('interactive');
      const header = require('./common/header.html').default
      const nonLoggedheader = require('./common/nonLogin-header.html').default

      const loginHeader = document.getElementById("nonLogged-header")
      const mainHeader = document.getElementById("header")

      if(loginHeader){
          loginHeader.innerHTML = nonLoggedheader
      }

      if(mainHeader){
          mainHeader.innerHTML = header
      }    
    
      
    }
    if (document.readyState === "complete") {
      console.log('complete');
      initTE({ Input,Carousel,Select,Collapse, Datepicker});
      
      

    }
  };

