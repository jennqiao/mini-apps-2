import ReactDOM from 'react-dom';
import React from 'react';
import StepOne from './f1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
    this.nextStep = this.nextStep.bind(this);
  } 

  nextStep () {

    let nextStep = this.state.step +1;
    this.setState({
      step: nextStep
    })

  }

  render(){
    if (!this.state.step) {
      return (
        <div>
          <button className="btn btn-primary btn-lg btn-block" onClick={this.nextStep}>Checkout</button>
        </div>
      )
    }

    else if (this.state.step === 1) {
      return (
        <div>
          <StepOne nextStep={this.nextStep}/>
          </div>
      )
    } else if (this.state.step === 2) {
      return (
        <div> Step 2
          </div>
      )
    } else if (this.state.step === 3) {
      <div> Step 3
        </div>
    }
  }
}

export default App;