import React, { useState } from "react";

import "./roster.css";
const Roster = ({ roster }) => {
  return (
    //return a teamCard for every object in the playerList State
    <div id="roster" className="">
      {roster.map((team, index) => {
        return <li key={index}>{team}</li>;
      })}
    </div>
  );
};

export default Roster;
