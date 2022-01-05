import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>Produce available n {props.mont} : </h3>
      <ul>
        <li><em>{props.selection}</em></li>
      </ul>
      
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