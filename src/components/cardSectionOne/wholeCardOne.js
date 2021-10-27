import React from "react";
import CardSectionOne from "../cardSectionOne/cardSectionOne";
import hero1 from "../../assets/images/hero1.gif";
import hero2 from "../../assets/images/hero2.gif";

import hero3 from "../../assets/images/hero3.gif";
import hero4 from "../../assets/images/hero4.gif";
import "./cardSectionOne.css";
const WholeCardOne = () => {
  return (
    <div>
      <div className="cardSection__grid asap">
        <div className="CardSectionColom">
          <CardSectionOne ImgSrc={hero1} />
        </div>
        <div>
          <CardSectionOne ImgSrc={hero2} />
        </div>
        <div>
          <CardSectionOne ImgSrc={hero3} />
        </div>
        <div>
          <CardSectionOne ImgSrc={hero4} />
        </div>
      </div>
    </div>
  );
};

export default WholeCardOne;
