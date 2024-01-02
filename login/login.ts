import axios from 'axios'
import '../src/global.scss'
import './login.scss'

const token = localStorage.getItem('token')
if (token != null) location.href = '/'

const form = document.querySelector('#login-form')

if (form != null) {
  form.addEventListener('submit', (e: any) => {
    e.preventDefault()
    let email: string = ''
    let password: string = ''

    if (e.target != null) {
      email = e.target.email.value
      password = e.target.password.value
    }

    axios.post('http://localhost:3000/users/login', {
      email,
      password
    })
      .then(res => {
        const { user }: {
          user: {
            name: string
            email: string
            token: string
          }
        } = res.data
        localStorage.setItem('user', JSON.stringify(res.data))
        localStorage.setItem('token', user.token)

        location.reload()
      })
      .catch(err => { console.log(err) })

    if (e.target != null) {
      e.target.email.value = ''
      e.target.password.value = ''
    }
  })
}
