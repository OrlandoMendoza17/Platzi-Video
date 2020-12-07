import React, {PureComponent} from 'react'

class RelatedItem extends PureComponent{
  handleClick = ()=>{
    this.props.handleOpenModal(this.props)
  }
  render(){
    return(
      <div className="RelatedItem" onClick={this.handleClick}>
        {
          this.props.children
        }
        <span className="RelatedItem-title">
          {this.props.title}
        </span>
      </div>
    )
  }
}

export default RelatedItem;