import React from "react";
import Board from "./Board";
import Routes from "../router/Routes";
import "../styles/Views.css"


function Views() {
  return (
    <div > 
      <div id="header" className="header"> 
        <div > 
          <h3>Board CRUD</h3> 
        </div> 
      </div> 
      <div id="sidebar" className="sidebar"> 
        <Board /> 
      </div> 
      <div id="content" className="content"> 
      dfdfdsd
        <Routes /> 
      </div> 
    </div>
  )
};

export default Views;
