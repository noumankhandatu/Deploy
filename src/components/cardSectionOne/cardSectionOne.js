import React from "react";
import "./cardSectionOne.css";

const CardSectionOne = (props) => {
  return (
    <div>
      {<img src={props.ImgSrc} alt="" className="CardSection__OneSize" />}
    </div>
  );
};

export default CardSectionOne;
