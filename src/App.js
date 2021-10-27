import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "../src/components/Footer/index";
import Question from "./components/Questions";
import SliderBar from "./components/Slider";
import CardEndingButton from "./components/Button/CardEndingButton";
import HandleBlackSection from "./components/HandleBlackSection/HandleBlackSection";
import TextArea from "./components/TextAreas/textarea";
import RoadMapMainFile from "./components/RoadMap/RoadMapMainFile";
import HeaderBtn from "./components/headerButton/headerbtn";
import WholeCardOne from "./components/cardSectionOne/wholeCardOne";
import astro from "./assets/images/astro.png";
import TeamComponentLayout from "./components/TeamComponent";
import SecondBlackBar from "./components/SecondBlackBar";
import Carousle from "./components/carousel/carousel";
import TeamComponentCard from "./components/TeamComponent/TeamComponentCard";

import { data } from "./components/TeamComponent/index";

function App() {
  const [increment, setincrement] = useState(1);
  const [newState, setState] = useState(1);
  const handleInc = () => {
    setincrement(increment - 1);
    if (increment == 1) {
      setincrement(1);
    }
  };
  const handleMin = () => {
    setincrement(increment + 1);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <React.Fragment>
      <Header />
      <div className="Body__LayOut">
        <div className="Body_Flexed animate__animated animate__backInDown ">
          <h1 className="Body__Text">
            Aka Datusin Dogg <br />
            <small> Troublesome 19-MF-96 WestSide </small>
          </h1>
          <p className="Body__Dttext">Join the SLOTHz Team!</p>
        </div>
      </div>
      {/* Section One Card From HERE */}
      <WholeCardOne className="asap" />
      <div className="CardSection__EndingButton  ">
        <CardEndingButton />
      </div>
      {/* SectionOne End Here */}
      <div className="cardSection__gridTwo">
        <div className="HandleBlackSection__Back">
          <HandleBlackSection textOne="9999" textTwo="SLOTHz" />
        </div>
        <div className="HandleBlackSection__Back">
          <HandleBlackSection textOne="156" textTwo="TRAITS" />
        </div>
        <div className="HandleBlackSection__Back">
          <HandleBlackSection textOne="10" textTwo="COMMUNITY PRIZES" />
        </div>
        <div className="HandleBlackSection__Back">
          <HandleBlackSection textOne="20" textTwo="EXCLUSIVE SLOTHz" />
        </div>
      </div>
      {/* Section End */}
      <div className="SectionTwo ">
        <TextArea />
      </div>
      <div className="sectionTwo__Astro">
        <div className="sectionTwo__Box">
          <h1>Mint your SLOTHz!</h1>
          <p>
            You can mint up to 20 SLOTHz at once. The price per SLOTHz is 0.045
            ETH.
          </p>
          <hp>4289 / 9999 SLOTHz minted</hp>
          <div className="SectionTwo__Button">
            <button className="SectionTwo__ButtonInc" onClick={handleInc}>
              -
            </button>
            <input className="SectionTwo__Input" value={increment} />
            <button className="SectionTwo__ButtonDec" onClick={handleMin}>
              +
            </button>
          </div>
          <div className="SectionTwo__BtnCnt">
            <HeaderBtn />
          </div>
          <p>
            Make sure you are using the Metamask/Coinbase in-app browser or have
            Metamask installed on your browse
          </p>
        </div>
        <div className="SectionTwo__centroCenter">
          <img className="SectionTwo__AstroSize" src={astro} alt="" />
        </div>
      </div>{" "}
      <Carousle breakPoints={breakPoints} itemPadding={[0, 5]}>
        {data.map((imgSrc, i) => (
          <TeamComponentCard key={i} imgSrc={imgSrc} name="@Mike Dane" />
        ))}
      </Carousle>
      <SliderBar />
      {/* RoadMap Start */}
      <RoadMapMainFile />
      {/* RoadMapEndHere */}
      {/* SecondBlackBar Starts */}
      <SecondBlackBar />
      {/* Team Section Starts Here */}
      <TeamComponentLayout />
      {/* Question Accordions Start */}
      <Question />
      {/* Footer Comes */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
