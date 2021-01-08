import React from 'react'
import PropTypes from 'prop-types'
import SvgContainer from '../../icons/components/container'
import YoutubeIcon from '../../icons/components/youtube-icon'

function YoutubeVideo(props){
  return(
    <div className="Youtube-video">
      <iframe 
        width="560" 
        height="415" 
        src={props.src}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen="allowfullscreen"
      ></iframe>
      <SvgContainer>
        <YoutubeIcon
          size={50}
        />
      </SvgContainer>
    </div>
  )
}
export default YoutubeVideo;