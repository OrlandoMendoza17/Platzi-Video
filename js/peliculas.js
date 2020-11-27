const plantillaCategoria = (nombreCategoria) =>{
  return `
          <div class="primaryList">
            <h2>Lo Mejor de la semana</h2>
            <h3>${nombreCategoria}</h3>
            <div id="${nombreCategoria}" class="primaryList-items">
              <img src="img/loader2.png" class="categoryLoader" alt="loader">
            </div>
          </div>
        `
}
const plantillaItem = (item, categoria) =>{
  return `
          <div class="listItem" data-id="${item.id}" data-title="${item.title}" data-category="${categoria}">
            <img src="${item.medium_cover_image}" alt="">
            <h4>${item.title}</h4>
          </div>
        `
}
const plantillaPlayList = (pelicula) =>{
  return `<li class="playList-item" data-id="${pelicula.id}">
            ${pelicula.title}
          </li>`
}
const crearCategoriaItem = (nombreCategoriaItem, $elemento, plantilla, categoria) =>{
  const $html = document.implementation.createHTMLDocument();
  $html.body.innerHTML = plantilla(nombreCategoriaItem, categoria);
  $elemento.append($html.body.children[0])
}
const findMovie = (category, idItem) =>{
      
  return peliculas[category].find((pelicula) =>{
            return pelicula.id === parseInt(idItem)
          })
}
const peliculaFound = (title, img) => {
  $section.classList.remove('grid-template-full')
  $featuring.style.display = "block";
  let $featuringContainer = $featuring.querySelector('.featuring-container')
  $featuringContainer.innerHTML = `
                                  <img src="${img}" alt="">
                                  <div class="featuring-info">
                                    <h2>${title}</h2>
                                  </div>
                                  <button><i class="fas fa-1-3x fa-times"></i></button>

                                  ` 
  let $btnForm = $featuringContainer.querySelector('button')
  $btnForm.addEventListener('click', () => {
    $section.classList.add('grid-template-full')
    $featuring.style.display = "none";
  })
}
const getMovies = async (genero) => {
  
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json${genero}`)
  const data = await response.json()
  return data.data.movies
}
const getUser = async () => {
  
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json();
  const user = data.results[0];
  
  const $html = document.implementation.createHTMLDocument()
  $html.body.innerHTML = `<li>
                              <img src="${user.picture.medium}" alt="">
                              <span>${user.name.first} ${user.name.last}</span>
                            </li>`

  $playListAmigos.append($html.body.children[0])
}

const showModal = (title, imageURL, description) =>{
  $modal.querySelector('.movie-description').innerHTML = `
                                                          <div class="movie-description">
                                                            <h2>${title}</h2>
                                                            <div class="modal-grid">
                                                              <img src="${imageURL}" alt="">
                                                              <p>${description}</p>
                                                            </div>
                                                          </div>
                                                        `
  $modal.style.transform = "translateY(0)"
}

const $section = document.getElementById('section')
const $featuring = document.getElementById('featuring')
const $modal = document.getElementById('modal');
const $modalBtn = $modal.getElementsByTagName('button')[0]

const $playListAmigos = document.getElementById('playListAmigos')
const $myPlayList = document.getElementById('myPlayList')

$modalBtn.addEventListener('click', () => {
  $modal.style.transform = "translateY(-1000px)";
})

const $form = document.getElementById('form')

$form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const data = new FormData($form)
  let askedMovie;
  
  for (const categoria in peliculas) {
    
    let foundMovie = peliculas[categoria].find( ({title}) => title === data.get('search'))
    
    if(foundMovie !== undefined){
      askedMovie = foundMovie 
    }
  }
  console.log(askedMovie)

  if(askedMovie !== undefined){
    peliculaFound(askedMovie.title, askedMovie.medium_cover_image)
  }else{
    peliculaFound('Not Found :(')
  }
})

const $main = document.getElementById('primary-main');
const generos = ['action', 'drama', 'thriller', 'comedy', 'horror', 'history', 'romance', 'Adventure', 'Biography']
const id = {};

generos.forEach(genero => crearCategoriaItem(genero, $main, plantillaCategoria))
generos.forEach(genero => id[genero] = (document.getElementById(genero)) )

const promesas = generos.map(genero => getMovies(`?genre=${genero}`))
var peliculas = {};
var itemsPeliculas;

Promise
  .all(promesas)
  .then(datos => {

    datos.forEach((dato, index) =>{
      peliculas[generos[index]] = dato;
    })

    for(const categoria in peliculas){
      let peliculaItem = peliculas[categoria]
    
      peliculaItem.forEach((item, index) =>{

        if (index === 0) { //elimina el loader de cada categoria cuando cuando van a ser impresas
          id[categoria].children[0].remove()
          id[categoria].style.overflow = "auto"
        }
        crearCategoriaItem(item, id[categoria], plantillaItem, categoria)
      })
    }

    itemsPeliculas = document.getElementsByClassName('listItem') //HTMLCollection-type
      
    for(let i = 0; i < itemsPeliculas.length; i++){
      itemsPeliculas[i].addEventListener('click', () =>{

        let pelicula = findMovie(itemsPeliculas[i].dataset.category,
                                 itemsPeliculas[i].dataset.id)
        
        showModal(pelicula.title, 
                  pelicula.medium_cover_image, 
                  pelicula.synopsis)
        
      })
    }
  })

for (let index = 0; index < 10; index++) {
  getUser()
}
  
var peliculasRandom = getMovies('');
peliculasRandom
  .then(datos =>{
    peliculasRandom = datos
    peliculasRandom.forEach(pelicula => crearCategoriaItem(pelicula, $myPlayList, plantillaPlayList))

    const playListItems = document.getElementsByClassName('playList-item')
    console.log(playListItems)
    for (let i = 0; i < playListItems.length; i++) {
      playListItems[i].addEventListener('click', () => {

        let pelicula = peliculasRandom.find(peliculaRandom => {
          return peliculaRandom.id === parseInt(playListItems[i].dataset.id)
        })
        showModal(pelicula.title, 
          pelicula.medium_cover_image, 
          pelicula.synopsis)
      })      
    }
  }) 