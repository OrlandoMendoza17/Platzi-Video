import React from 'react'
import Media from './media'

function PlayList(props){
  
  return(
    <div className="Playlist py-3">
      {
        props.playlist.map((media)=>{
          return <Media {...media} key={media.id}/>
        })
      }
    </div>
  )
}

export default PlayList;