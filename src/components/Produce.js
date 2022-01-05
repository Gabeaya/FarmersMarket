import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>Produce available on {props.month} : </h3>
      <ul>
      {props.selection.map(selection =>
        <li><em>{selection} </em></li>
      )}
      </ul>
      
      <hr/>
    </React.Fragment>
  );
}

Produce.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Produce;