import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HandleError from '../../error/containers/handleError'
import HomeLayout from '../components/HomeLayout'
import Related from '../components/related';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modalContainer'
import Modal from '../../widgets/components/modal'

class Home extends Component{
  
  state = {
    modalVisible: false,
    modalTitle: 'No hay ningun titulo',
    modalImg: ''
  }
  //Metodo que abre el modal con la info del Media
  handleOpenModal = (event) =>{
    const ImgMedia = event.target.children[0].children[0].getAttribute('src')
    
    this.setState({
      modalVisible: true,
      modalTitle: event.target.innerText,
      modalImg: ImgMedia
    })
    console.log(event.target.children[0].children[0].getAttribute('src'))
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
            playlist={this.props.playlist}
            users={this.props.users}
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
                handleClick={this.handleCloseModal}
                title={this.state.modalTitle}
                srcImageMedia={this.state.modalImg}
              />
              
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