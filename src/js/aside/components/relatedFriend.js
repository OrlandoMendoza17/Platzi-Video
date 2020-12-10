import React, {PureComponent} from 'react'

class RelatedFriend extends PureComponent{
  handleClick = ()=>{
    alert(`La lista de ${this.props.name} no está disponible`)
  }
  render(){
    return(
      <div className="RelatedFriend" onClick={this.handleClick}>
        {
          this.props.children
        }
        <span className="RelatedFriend-title">
          {this.props.name}
        </span>
      </div>
    )
  }
}

export default RelatedFriend;