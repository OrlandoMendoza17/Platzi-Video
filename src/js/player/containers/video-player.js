import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import PlayPause from '../components/playpause'
import Video from './video'
import Controls from '../components/controls'
import Timer from '../components/timer'
import ProgressBar from '../components/progress-bar'
import Volume from '../components/volume'
import Fullscreen from '../components/fullscreen'
import Spinner from '../components/spinner'

class VideoPlayer extends Component{
  state={
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: true, //Por default hasta que cargue el metaData, ver -> this.handleLoadedMetaData
    fullscreen: document.webkitIsFullScreen,
    volumeSavedValue: 0,
    muteVolume: false
  }
  handlePlay = () =>{
    this.setState({
      pause: !this.state.pause,
    })
  }
  handleLoadedMetaData = (event) =>{
    this.video = event.target
    this.setState({
      duration: this.video.duration,
      loading: false, //Se retira el spinner
    })
  }
  handleTimeUpdate = () =>{
    //Se guarda el tiempo actual de video
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgress= (event) =>{
    this.video.currentTime = event.target.value
  }
  handleSeeking = () =>{
    //El estado cambia para que aparezca el spinner
    this.setState({
      loading: true
    })
  }
  handleSeeked = () =>{
    //El estado cambia para que desaparezca el spinner
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = (event) =>{
    this.video.volume = event.target.value
    this.setState({
      volumeSavedValue: this.video.volume,
      muteVolume: false
    })
    console.log(this.state.volumeSavedValue)
  }
  handleMuteVolume = () =>{
    
    //Si el volumen no está muteado se mutea
    if(!this.state.muteVolume){
      
      this.setState({
        volumeSavedValue: this.video.volume
      })
      this.video.volume = 0
      
    }else{
      
      this.video.volume = this.state.volumeSavedValue 
      this.setState({
        volumeSavedValue: 0
      })
    }
    //El estado del mute se invierte
    this.setState({
      muteVolume: !this.state.muteVolume
    })
  }
  toggleFullscreenState = ()=>{
    //El estado del Fullscreen se invierte para que cambie el icono del videoPlayer
    this.setState({
      fullscreen: !document.webkitIsFullScreen
    })
  }
  handleFullscreenToggle = () =>{
    //Sino esta en fullscreen
    if (!document.webkitIsFullScreen) {
      
      this.player.webkitRequestFullscreen() //El reproductor pide el fullscreen
      this.toggleFullscreenState()
      
    }else{
      document.webkitExitFullscreen()
      this.toggleFullscreenState()
    }
  }
  setRef = (element) =>{
    this.player = element
  }
  //Metodo para formatear el display del tiempo en el reproductor
  formattedTime = (secs) => {
    const leftPad = (number) => {
      const pad = '00' //pad.lenght = 2
      const numberString = number.toString()
      
      //if numberString.lenght = 1, Example: number = 1
        // then return `01`
        
      //if numberString.lenght = 2, Example: number = 23
        //then return `23`
        
      return pad.substring(0, pad.length - numberString.length) + number
    }
    
    const minutes = parseInt(secs / 60, 10)
    const seconds = parseInt(secs % 60, 10)
    
    return `${minutes}:${leftPad(seconds)}`
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  render(){
    
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Video
          src={this.props.src}
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          onTimeUpdate={this.handleTimeUpdate}
          onLoadedMetaData={this.handleLoadedMetaData}
          onSeeking={this.handleSeeking}
          onSeeked={this.handleSeeked}
        />
        
        <Spinner
          active={this.state.loading}
        />
        
        <Controls>
        
          <PlayPause 
            pause={this.state.pause}
            handlePlay={this.handlePlay}
          />
          <Timer
            duration={this.state.duration}
            formatTime={this.formattedTime}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            onChange={this.handleProgress}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleMuteVolume={this.handleMuteVolume}
            isMuteVolume={this.state.muteVolume}
          />
          <Fullscreen
            isFullscreen={this.state.fullscreen}
            handleFullscreenToggle={this.handleFullscreenToggle}
          />
          
        </Controls>
          
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;