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
  
  handleClick = () => {
    this.setState(prevState => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.produceVisibleOnPage) {
      currentlyVisibleState = <AvailableProduce />
      buttonText = "Return to Market Schedule";
    } else {
      currentlyVisibleState = <MarketSchedule />
      buttonText = "Check Out Produce"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ToggleControl;