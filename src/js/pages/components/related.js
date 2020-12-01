import React from 'react';

function Related(props){
  return(
    <aside className="Related">
      <div className="Related-container px-3 pb-3">
        {
          props.children
        }
      </div>
    </aside>
  )
}

export default Related;