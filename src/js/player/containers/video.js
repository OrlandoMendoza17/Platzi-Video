import React, { Component, Fragment } from 'react'
import SvgContainer from '../../icons/components/container'
import VideoIcon from '../../icons/components/video-icon'

class Video extends Component{
  
  togglePlay(){
    if(this.props.pause){
      this.video.play()
    }else{
      this.video.pause()
    }
  }
  setRef = (element) => {
    this.video = element
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }
 
  render(){
    
    const {
      src,
      autoplay,
      onTimeUpdate,
      onLoadedMetaData,
      onSeeking,
      onSeeked,
    } = this.props
    
    return(
      
      <Fragment>
      
        <video
        // controls
          src={src} 
          ref={this.setRef}
          autoPlay={autoplay}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetaData}
          onSeeking={onSeeking}
          onSeeked={onSeeked}
        />
        <SvgContainer>
          <VideoIcon
            size={50}
          />
        </SvgContainer>
        
      </Fragment>
    )
  }
}

export default Video;