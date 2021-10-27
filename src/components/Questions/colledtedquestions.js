import React, { useState, useRef } from "react";
import "./question.css";
const CollectedQuestions = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div className="CollectedQuestion__Sticked">
      <div className="accordion" onClick={() => setShow(!show)}>
        <i id="questionMarkedColored" class="far fa-question-circle"></i>
        <span className="toggledLast">{props.headText}</span>
        <i id="AnchorTagFloat" class="fas fa-chevron-up"></i>
      </div>

      {show ? <p className="panelTwo">{props.text}</p> : null}
    </div>
  );
};

export default CollectedQuestions;
