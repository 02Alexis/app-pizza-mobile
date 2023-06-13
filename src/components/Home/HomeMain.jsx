import React from "react";
import Cupons from "./Cupons/Cupons"
import Cards from "./Cards/Cards";
import FooterSearch from "../FooterSearch/FooterSearch";
import "./HomeMain.scss"

const HomeMain = () => {

  return (

    <div className="all">
      
      <div className="cupons">
        <Cupons/>
      </div>

      <div className="main">
        <Cards />
      </div>

      <div className="footer">
        <FooterSearch/>
      </div>
      
    </div>
  );
};

export default HomeMain;
