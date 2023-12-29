import CardComponent from './components/CardComponent'
import './home.scss'
import './global.scss'
import axios from 'axios'
import { IPost } from './types/IPost'
import SessionButtonsComponent from './components/SessionButtonsComponent'

// 658457f71d1f16b6a5c372b7
// const id: string = window.location.pathname.slice(1)
// fetch('http://localhost:3000/posts/' + id)
//   .then(res => res.json())  
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const sessionButtons = document.querySelector('#session-buttons') 
if (sessionButtons !== null) 
  sessionButtons.appendChild(SessionButtonsComponent())


axios.get('http://localhost:3000/posts')
  .then(res => {
    const container = document.getElementById('grid-card')
    
    if (container !== null)
      res.data.posts.map((post: IPost) => container.appendChild(CardComponent(post)))

  })
  .catch(() => {
    const container = document.getElementById('grid-card')
    container ? container.innerHTML  = 'Error en la petición' : null
  })


