<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import "./form.css";
class Form extends Component {
  // FORM will have input fields so initialize local state to handle the defaul;t behavior of the form elements
  //init State
  //one property per input feild to collect multiple fields of data
  state = {
    teamName: "",
  };

  // Methods

  /**************
   ***
   *** HandleChange will handle any changes in the input fields and update the state to reflect the value
   ***PARAMS----event
   *** setState() of each state property {playerName, teamName} to the value of he e.target
   ****/
  handleChange = (e) => {
    this.setState({ teamName: e.target.value });
=======
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
>>>>>>> c9cef1cd5c8ae1daf2bfd0f3c55c3dcedf1685f0
  };

  /**************
   ***
   *** handleSubmit will prevent the default actions from executing on the form element and
   *** this method will call the addPlayer method that has been passed down via props sending the current states playerName and TeamName
   ***PARAMS----event
   ***
   ****/
<<<<<<< HEAD
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.teamName);

    this.setState({ teamName: "" });
  };

  render() {
    return (
      <Fragment>
        <form
          autoComplete="off"
          id="signup-form"
          onSubmit={this.handleSubmit}
          className=""
        >
          <input
            name="TeamName"
            onChange={this.handleChange}
            value={this.state.teamName}
            type="text"
            placeholder="Team Name"
          />

          <input
            id="signup-btn"
            type="submit"
            value="submit"
            className="btn btn-warning "
          />
        </form>
      </Fragment>
    );
  }
}
=======

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
>>>>>>> c9cef1cd5c8ae1daf2bfd0f3c55c3dcedf1685f0

export default Form;
