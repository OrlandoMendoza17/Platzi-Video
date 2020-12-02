import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class Media extends PureComponent{
  state = {
    title: this.props.title,
    cover: this.props.cover
  }
  handleClick = (event) => {
    this.setState({
      title: 'John Freddy Vega',
      cover: '../images/covers/mejorandola.jpg'
    })
    console.log(this)
    setTimeout(()=>{
      console.log(this.state.title)
    },1000)
  }
  render(){
    return(
    
      <div className="Media" onClick={this.handleClick}>
         <div className="Media-image">
           <img src={this.state.cover} alt=""/>
         </div>
         <h4>
           {this.state.title}
         </h4>
      </div> 
     ) 
  }
}

Media.propTypes ={
  id: PropTypes.number,
  title: PropTypes.string,
  cover: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
}
export default Media;