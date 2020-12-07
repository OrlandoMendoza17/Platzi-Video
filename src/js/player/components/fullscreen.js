import React from 'react'
import FullscreenIcon from '../../icons/components/fullscreen'
import CompressIcon from '../../icons/components/compress'

function Fullscreen(props){
  return(
    <div className="Fullscreen" onClick={props.handleFullscreenToggle}>
      
      {
        props.isFullscreen?
          <button>
            <CompressIcon size={20} />
          </button>
        :
          <button>
            <FullscreenIcon size={20} />
          </button>
      }
      
    </div>
  )
}

export default Fullscreen;
