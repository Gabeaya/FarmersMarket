import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
      <h3>On {props.day} we will be at {props.location}</h3>
      <p><em>From {props.hours}</em></p>
      <p><em>Booth {props.booth}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Market;