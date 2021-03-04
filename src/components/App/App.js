import React, { useState } from "react";
// Router
// <BrowserRouter basename="/course-directory">
//use this to add a  base router when sereved from a sub directory
//use HashRouter instead much simpler
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./app.css";
import Form from "../Form/Form";
import Roster from "../Roster/Roster";
import Navigation from "../Navigation/Navigation";
// helper functions
import shuffle from "../../helpers/shuffle.js";
/*
get TeamName from user input
create a Roster from the Teams
on click of "Start" button
shuffle roster
create first Match
LOOP[
display First Match
click Team to determine winner
Next Team enters to play winner displays
] LOOP
when no more matches display Winner


Reset Route
if reset is clicked dump all data and return to registraion page

*/
const App = () => {
  const [roster, addPlayer] = useState([]);
  const [player, setPlayer] = useState();

  const StartGame = () => {
    console.log("starting...");
    let shuffledTeams = shuffle(roster);
    console.log(shuffledTeams);
  };
  return (
    <div id="app-wrapper" className=" d-flex flex-wrap ">
      <div className="w-50 h-75 container">
        <Form
          roster={roster}
          addPlayer={addPlayer}
          totalTeams={roster.length}
        />
      </div>
      <div className="w-50 h-75 container">
        <Roster roster={roster} />
      </div>
      <div className="  container">
        <Navigation StartGame={StartGame} />
      </div>
    </div>
  );
};

export default App;
