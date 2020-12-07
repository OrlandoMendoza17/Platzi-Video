import React from 'react'

function Timer(props){
  
  const formatTime = props.formatTime
  
  return(
    <div className="Timer">
      <span>
        {formatTime(props.currentTime)}/{formatTime(props.duration)}
      </span>
    </div>
  )
}

export default Timer;