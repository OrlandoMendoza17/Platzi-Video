import React from 'react'
import imageBrand from '../../../img/platzi-video.png'

function ImageBrand(){
  return(
    <div className="ImageBrand px-3">
      <img className="img-fluid" src={imageBrand} alt=""/>
    </div>
  )
}

export default ImageBrand;