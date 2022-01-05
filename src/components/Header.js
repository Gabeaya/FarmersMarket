import React from "react";
import fruitImage from "./../img/fruit.jpeg";

function Header(){
  return (
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <img src={fruitImage} alt="A photo of an assortment of fruit/veggies"/>
    </React.Fragment>
      
  );
}

export default Header;
