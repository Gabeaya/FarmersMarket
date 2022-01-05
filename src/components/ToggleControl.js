import React from 'react';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: false
    };
  }

  render(){
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }

}

export default ToggleControl;