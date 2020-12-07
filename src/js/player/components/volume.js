import React from 'react'
import MuteIcon from '../../icons/components/mute'
import VolumeIcon from '../../icons/components/volume'

function Volume(props){
  return(
    <div className="Volume">
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={props.handleVolumeChange}
        />
      </div>
      <div className="Volume-button" onClick={props.handleMuteVolume}>
        {
          (props.isMuteVolume)?
            <button>
              <MuteIcon size={20} />
            </button>
          :
            <button>
              <VolumeIcon size={20} />
            </button>
        }
      </div>
    </div>    
  )
}

export default Volume;