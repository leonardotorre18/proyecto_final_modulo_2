import './style.css'
import axios from 'axios'

// 658457f71d1f16b6a5c372b7
// const id: string = window.location.pathname.slice(1)
// fetch('http://localhost:3000/posts/' + id)
//   .then(res => res.json())  
//   .then(res => console.log(res))
//   .catch(err => console.log(err))


axios.get('http://localhost:3000/posts/')
  .then(res => console.log(res.data))


