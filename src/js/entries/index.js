import 'bootstrap'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import '../../scss/style.scss'
import Home from '../pages/container/home'
import data from '../../api.json'
import { users } from '../../apiUser.json'
import { playlist } from '../../apiMyplaylist.json'

const { categories } = data
const app = document.getElementById('app')

// ReactDOM.render( <Title estilos={styles} innerText="Epale mi pana, props.innerText" /> , app)
render( 
  <Home 
    users={users}
    categories={categories} 
    playlist={playlist}
  />, app)
