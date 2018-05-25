import ReactDOM from 'react-dom';
import React from 'react';

class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '', 
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  } 

  handleChange (e, inputType) {

    console.log(inputType ,e.target.value);

    let newState = this.state;
    newState[inputType] = e.target.value

    this.setState(newState, () => {
      console.log(this.state);
    })
  }


  render() {

    return (
      <div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Account Information</h4>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">Name</label>
                <input type="text" className="form-control" placeholder="" onChange={(e)=> this.handleChange(e, 'name')}/>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Email address</label>
                <input type="text" className="form-control" placeholder="" onChange={(e)=> this.handleChange(e, 'email')}/>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Password</label>
                <input type="text" className="form-control" placeholder="" onChange={(e)=> this.handleChange(e, 'password')} />
              </div>
            </div>
          </form>
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={this.props.nextStep}>Checkout</button>

      </div>
    )
  }
}

export default StepOne;


