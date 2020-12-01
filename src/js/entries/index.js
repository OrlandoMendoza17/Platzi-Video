import 'bootstrap'
import React from 'react'
import ReactDOM, { render } from 'react-dom'

import '../../scss/style.scss'
import Home from '../pages/container/home'

const app = document.getElementById('app')
const styles = {
  backgroundColor: "blue"
}
const clases = "p-4 m-3 text-white"

// ReactDOM.render( <Title estilos={styles} innerText="Epale mi pana, props.innerText" /> , app)
render( <Home/> , app)
