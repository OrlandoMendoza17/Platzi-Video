import React from 'react'
import HamburgerIcon from '../../icons/components/hamburger'

function ButtonToggle(props){
  return(
    <div className="ButtonToggle" onClick={props.handleClick}>
      <HamburgerIcon
        size="20"
      />
    </div>
  )
} 

export default ButtonToggle;