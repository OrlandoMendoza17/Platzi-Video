import {func} from 'prop-types'
import React from 'react'

function Controls(props){
  return(
    <div className="Controls">
      {
        props.children
      }
    </div>
  )
}

export default Controls;