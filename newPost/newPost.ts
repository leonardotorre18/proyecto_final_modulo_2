import axios from 'axios'
import SessionButtonsComponent from '../src/components/SessionButtonsComponent'
import '../src/global.scss'
import './newPost.scss'

const token = localStorage.getItem('token')

if (token == null) location.href = '/login/'

const sessionButtons = document.querySelector('#session-buttons')
if (sessionButtons !== null) sessionButtons.appendChild(SessionButtonsComponent())

const form = document.querySelector('#post-form')

if (form != null) {
  form.addEventListener('submit', (e: any) => {
    e.preventDefault()

    let title: string = ''
    let body: string = ''
    let image: string = ''

    if (e.target != null) {
      title = e.target.title.value
      body = e.target.body.value
      image = e.target.image.files[0]
    }

    axios.post('http://localhost:3000/posts', {
      title,
      body,
      image
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    })
      .then(() => {
        location.href = '/'
      })
      .catch(err => { console.log(err) })

    if (e.target != null) {
      e.target.title.value = ''
      e.target.body.value = ''
      e.target.image.value = ''
    }
  })
}
