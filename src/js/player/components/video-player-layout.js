import React from 'react'

function VideoPlayerLayout(props){
  return(
    <div className="VideoPlayer" ref={props.setRef}>
      {
        props.children
      }
    </div>    
  )
}

export default VideoPlayerLayout;