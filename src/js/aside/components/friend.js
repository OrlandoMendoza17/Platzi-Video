import React from 'react'

function Friend(props){
  return(
    <div className="Friend">
      
      <div className="Friend-image">
        <img src={props.src} alt=""/>
      </div>
      
      <span>
        {props.name}
      </span>
    </div>
  )
}

export default Friend;

