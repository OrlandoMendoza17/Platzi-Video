import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HandleError from '../../error/containers/handleError'
import HomeLayout from '../components/HomeLayout'
import Related from '../components/related';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modalContainer'
import Modal from '../../widgets/components/modal'
import VideoPlayer from '../../player/containers/video-player'
import YoutubeVideo from '../../player/components/youtube-video'

class Home extends Component{
  
  state = {
    modalVisible: false,
    modalTitle: 'No hay ningun titulo',
    modalImg: '',
    modalSrcVideo: '',
    videoType: '',
  }
  //Metodo que abre el modal con la info del Media
  handleOpenModal = (mediaProps) =>{
    
    this.setState({
      modalVisible: true,
      modalTitle: mediaProps.title,
      modalImg: mediaProps.cover,
      modalSrcVideo: mediaProps.src,
      videoType: mediaProps.videoType,
    })
    // console.log(mediaProps)
  }
  //Metodo que cierra el modal
  handleCloseModal = () =>{
    this.setState({
      modalVisible: false
    })
  }
  setRef = (element) => {
    this.media = element
  }
  
  render(){
    return(
      <HandleError>
        <HomeLayout>
          
          <Related
            users={this.props.users}
            playlist={this.props.playlist}
            handleOpenModal={this.handleOpenModal}
          />
          
          <Categories 
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            // setRef={this.setRef}
          />
          {
            //Renderiza y quita dependiendo del estado modalVisible
            this.state.modalVisible &&
            <ModalContainer>
              
              <Modal 
                title={this.state.modalTitle}
                videoType={this.state.videoType}
                handleClick={this.handleCloseModal}
                srcImageMedia={this.state.modalImg}
              >
                {
                  (()=>{
                    if(this.state.videoType === 'NormalVideo')
                      return(
                        <VideoPlayer
                          autoplay
                          src={this.state.modalSrcVideo}
                        />
                      )
                    else if(this.state.videoType ===  'YoutubeVideo'){
                      return(
                        <YoutubeVideo
                          src={this.state.modalSrcVideo}
                        />
                      )
                    }
                  })()
                }
                
              </Modal>
              
            </ModalContainer>
          }
          
        </HomeLayout>
      </HandleError>
    )
  }
}

Home.propTypes = {
  categories: PropTypes.array,
  playlist: PropTypes.array,
  users: PropTypes.array,
}
export default Home;