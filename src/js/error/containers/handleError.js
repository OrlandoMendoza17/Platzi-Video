import React, {Component} from 'react';

class HandleError extends Component{
  state = {
    handleError: false
  }
  componentDidCatch(error, info){
    this.setState({
      handleError: true
    })
  }
  render(){
    if(this.state.handleError){
      return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <p className="font-weight-bold text-danger" style={{fontSize:"30px"}}>Coño chamo, la cagaste</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default HandleError;