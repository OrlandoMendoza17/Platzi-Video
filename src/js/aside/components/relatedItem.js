import React, {PureComponent} from 'react'

class RelatedItem extends PureComponent{
  handleClick = ()=>{
    console.log(this)
  }
  render(){
    return(
      <div className="RelatedItem" onClick={this.handleClick}>
        {
          this.props.children
        }
        <span className="RelatedItem-title">
          {this.props.name}
        </span>
      </div>
    )
  }
}

export default RelatedItem;