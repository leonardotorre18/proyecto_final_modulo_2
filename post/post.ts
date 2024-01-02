import axios from 'axios'
import '../src/global.scss'
import './post.scss'
import SessionButtonsComponent from '../src/components/SessionButtonsComponent'

const sessionButtons = document.querySelector('#session-buttons')
if (sessionButtons !== null) sessionButtons.appendChild(SessionButtonsComponent())

const id = window.location.search.split('=')[1]

axios.get('http://localhost:3000/posts/' + id)
  .then(res => {
    const { post }: {
      post: {
        title: string
        body: string
        user: {
          name: string
          email: string
        }
        img: {
          url: string
          id: string
        }
      }
    } = res.data
    console.log(post)

    const title = document.querySelector('#post-title')
    const image = document.querySelector('#post-img')
    const body = document.querySelector('#post-body')
    const author = document.querySelector('#post-author')

    if (
      title !== null &&
      image !== null &&
      body !== null &&
      author !== null
    ) {
      title.innerHTML = post.title
      image.setAttribute('src', post.img.url)
      body.innerHTML = post.body
      author.innerHTML = post.user.name
    }
  })
  .catch(res => res)
