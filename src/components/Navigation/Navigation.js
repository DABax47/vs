import React, { Component } from "react";
import "./navigation.css";
const Navigation = ({ StartGame }) => {
  return (
    <div>
      <h1>Navigation</h1>
      <button>Reset</button>
      <button onClick={StartGame}>Start</button>
    </div>
  );
};

export default Navigation;
