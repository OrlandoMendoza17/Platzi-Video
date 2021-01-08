// import 'bootstrap'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "../reducers/data";
import '../../scss/style.scss'
import Home from '../pages/container/home'
import { categories } from '../../api.json'
import { users } from '../../apiUser.json'
import { playlist } from '../../apiMyplaylist.json'

// const { categories } = data
const app = document.getElementById('app')

// ReactDOM.render( <Title estilos={styles} innerText="Epale mi pana, props.innerText" /> , app)

const initialState = {
  data: {
    categories,
    users ,
    playlist 
  },
  search: null
}

const store = createStore(
  // (state)=>state,
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// function renderApp(){
//   render( 
//     <Home 
//       users={users}
//       categories={categories} 
//       playlist={playlist}
//     />, 
//     app)
// }
function renderApp(){
  render( 
    <Provider store={store}>
      <Home />
    </Provider>, 
  app)
}

renderApp()

console.log('store', store.getState())

if(module.hot){
  module.hot.accept('../pages/container/home', ()=>{
    renderApp()
  })
}