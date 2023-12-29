import axios from 'axios'
import SessionButtonsComponent from '../src/components/SessionButtonsComponent'
import '../src/global.scss'
import './newPost.scss'


const token = localStorage.getItem('token')

if (token == null) location.href = '/login/'


const sessionButtons = document.querySelector('#session-buttons') 
if (sessionButtons !== null) 
  sessionButtons.appendChild(SessionButtonsComponent())

const form = document.querySelector('#post-form')

if (form != null) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const title = e.target ? e.target['title'].value : null
    const body = e.target ? e.target['body'].value : null
    const image = e.target ? e.target['image'].files[0] : null

    axios.post('http://localhost:3000/posts', {
      title,
      body,
      image
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
        Authorization: token
      }
    })
      .then(res => {
        location.href = '/'
      })
      .catch(err => console.log(err))


      e.target ? e.target['title'].value = '' : null
      e.target ? e.target['body'].value = '' : null
      e.target ? e.target['image'].value = '' : null
  })
}