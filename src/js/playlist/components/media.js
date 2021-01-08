import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import svgContainer from '../../icons/components/container'
import ImageIcon from '../../icons/components/image'
import SvgContainer from '../../icons/components/container';

class Media extends PureComponent{
  state = {
    title: this.props.title,
    cover: this.props.cover,
    author: this.props.author,
    authorURL: this.props.authorURL
  }
  handleClick = (event) => {
   
    console.log(this)
    this.props.handleOpenModal(this.props)
   
  }
  render(){
    
    const {
      title, 
      cover, 
      author, 
      authorURL
    } = this.state
  
    return(
    
      <div className="Media">
          <div className="Media-image" onClick={this.handleClick}>
            <img src={cover} alt=""/>
            <SvgContainer>
              <ImageIcon
                size={50}
              />
            </SvgContainer>
          </div>
          <h4>
              {
                (title.length > 25) ?
                  `${title.substring(0,25)}...` 
                : 
                  title
              }
          </h4>
          <a href={authorURL} target="_blank" className='text-secondary'>
            {author}
          </a>
      </div> 
     ) 
  }
}

Media.propTypes ={
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
}
export default Media;