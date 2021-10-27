import React from "react";
import "./teamcomponent.css";
import TeamComponentCard from "./TeamComponentCard";
import realone from "../../assets/images/team-rhettn.png";
import realtwo from "../../assets/images/team-stuxnet.png";
import realthree from "../../assets/images/team-marcko.png";
import realfour from "../../assets/images/team-kie.png";
import zombie from "../../assets/images/zombie-sloth.png";
import skelton from "../../assets/images/skeleton-sloth.png";
import male from "../../assets/images/male-sloth.png";
import robot from "../../assets/images/robot-sloth.png";
import alien from "../../assets/images/alien-sloth.png";
export const data = [
  alien,
  zombie,
  skelton,
  realone,
  realtwo,
  robot,
  realthree,
  realfour,
  male,
  realone,
  realtwo,
  realthree,
  realfour,
];
const TeamComponentLayout = () => {
  return (
    <div className="TeamComponent__Cover">
      <div className="TeamComponent__Header">
        <h2 className="TeamComponent__UperText">TEAM</h2>
        <p className="TeamComponent__BottomText">
          This is the group of crazy nerds that made SLOTHz a reality! Each of
          us is a key component in order to give you guys the NFT art you
          deserve. Each of us is here for the long run, we’re aiming to bring
          SLOTHz to the next level.
        </p>
      </div>
      <div className="TeamComponent__CardsProps">
        <TeamComponentCard imgSrc={realone} name="@Aka Datusing" />
        <TeamComponentCard imgSrc={realtwo} name="@Mike Dane" />
        <TeamComponentCard imgSrc={realthree} name="@Invoker" />
        <TeamComponentCard imgSrc={realfour} name="@Juggernaut" />
      </div>
      <p className="TeamComponent__BottomText TeamComponent__EndingText">
        We need you! If you feel you can bring something to the table please
        send us a DM.
      </p>
    </div>
  );
};

export default TeamComponentLayout;
