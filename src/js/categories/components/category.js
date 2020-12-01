import React from 'react';
import PlayList from '../..//playlist/components/playlist';
import Media from '../..//playlist/components/media';

function Category(props){
  return(
    <div className="Category mb-4">
      
      <div className="Category-title">
        <span className="text-secondary">{props.description}</span>
        <h3>{props.title}</h3>
      </div>
      
      <PlayList 
        playlist={props.playlist}
        setRef={props.setRef}
      /> 
      
    </div>
  )
}

export default Category;