import React from 'react'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

function PlayPause(props){
  return(
    <div className="PlayPause">
      
      {
        props.pause ? 
          <button onClick={props.handlePlay}>
            <Play size={20}/>
          </button>
        :
          <button onClick={props.handlePlay}>
            <Pause size={20}/>
          </button>
      }
      
    </div>
  )
}

export default PlayPause;