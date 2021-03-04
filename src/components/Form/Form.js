import React, { useState } from "react";
import PropTypes from "prop-types";

import "./form.css";

const Form = ({ roster, addPlayer, totalTeams }) => {
  const [teamName, setTeamName] = useState("");
  /**
   * handleChange updates the input field with user *input
   * @params event obj
   *@return none
   */
  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  /**************
   ***
   *** handleSubmit will prevent the default actions from executing on the form element and
   *** this method will call the addPlayer method that has been passed down via props sending the current states playerName and TeamName
   ***PARAMS----event
   ***
   ****/

  /**
   * handleSubmit returns the input to its original *state while adding a player to the roster
   *@param event obj
   *@return none
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer([...roster, teamName]);
    setTeamName("");
  };

  return (
    <div id="form-cnt" className="">
      <form
        autoComplete="off"
        id="signup"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="d-flex flex-column "
      >
        <input
          name="TeamName"
          onChange={(e) => {
            handleChange(e);
          }}
          value={teamName}
          type="text"
          placeholder="Team"
        />

        <input id="signup-btn" type="submit" value="SUBMIT" />
        <p>Teams: {totalTeams}</p>
      </form>
    </div>
  );
};
Form.propTypes = {
  totalTeams: PropTypes.number,
  // ...prop type definitions here
};

export default Form;
