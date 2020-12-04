import React from 'react'
import PropTypes from 'prop-types'
import Media from './media'

function PlayList(props){
  
  return(
    <div className="Playlist py-3">
      {
        props.playlist.map((media)=>{
          return <Media {...media} handleOpenModal={props.handleOpenModal} key={media.id}/>
        })
      }
    </div>
  )
}

PlayList.propTypes = {
  playlist: PropTypes.array
}

export default PlayList;