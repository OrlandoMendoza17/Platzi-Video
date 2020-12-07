import {func} from 'prop-types'
import React from 'react'

function SvgContainer(props){
  return(
    <div className="svg-container">
      {props.children}
    </div>
  )
}

export default SvgContainer