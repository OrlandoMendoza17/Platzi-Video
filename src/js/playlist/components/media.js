import React, { PureComponent } from 'react';


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

export default Media;