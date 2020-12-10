import React from 'react'
import CloseIcon from '../../icons/components/close-icon'

function Modal(props){
  return(
    <div className="Modal-container p-2">
      <div className="Modal p-3">
        
        <div className="Modal-header">
          
          <h3>
            {
              props.title.length > 40 
                ? `${props.title.substring(0, 50)}...`
                : props.title
            }
          </h3>
          
          <button onClick={props.handleClick}>
            <CloseIcon 
              color={'#171b2f'} size={20}
            />
          </button>
        </div>
        {/* <div className="Modal-img-container mt-3">
          <img src={props.srcImageMedia} alt=""/>
        </div> */}
        
        {
          props.children
        }
        
      </div>
    </div>
  )
}

export default Modal;