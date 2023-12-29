import axios from 'axios'
import '../src/global.scss'
import './login.scss'

const token = localStorage.getItem('token')
if (token != null) location.href = '/'

const form = document.querySelector('#login-form')

if (form != null) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const email = e.target ? e.target['email'].value : ''
    const password = e.target ? e.target['password'].value : ''

    axios.post('http://localhost:3000/users/login', {
      email,
      password
    })
      .then(res => {

        localStorage.setItem('user', JSON.stringify(res.data))
        localStorage.setItem('token', res.data.user.token)

        location.reload()

      })
      .catch(err => console.log(err))


      e.target ? e.target['email'].value = '' : null
      e.target ? e.target['password'].value = '' : null
  })
}