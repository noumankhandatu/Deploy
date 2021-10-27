import React from "react";
import "./HandleBlackSection.css";
const HandleBlackSection = (props) => {
  return (
    <div>
      <div className="HandleBlackSection__Styless">
        <h1 className="HandleBlackSection__Lottery">{props.textOne}</h1>
      </div>
      <div>
        <h3 className="HandleBlackSection__Size">{props.textTwo}</h3>
      </div>
    </div>
  );
};

export default HandleBlackSection;
