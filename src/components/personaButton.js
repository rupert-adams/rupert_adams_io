import React from 'react';
import { connect } from 'react-redux';
import { switchPersona } from '../actions/actions.js';
import { personaTwo } from '../data/personaData.js';


const PersonaButton = (props) => {

  return (
    <div>
    <button className="App-button" onClick={() => props.switchPersona(personaTwo)}>
      {props.persona.button}
    </button>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
      persona: state
  };
};

export default connect(mapStateToProps, { switchPersona })(PersonaButton)
