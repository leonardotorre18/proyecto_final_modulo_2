import axios from "axios"

export default (): HTMLElement => {

  
  const token: string | null = localStorage.getItem('token')
  
  if (token != null) {
    const logoutButton = document.createElement('button')
    logoutButton.innerText = 'Cerrar Sessión'
    logoutButton.addEventListener('click', () => {
      axios.post('http://localhost:3000/users/logout', {}, {
        headers: {
          Authorization: token
        }
      }).then(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        location.reload()
      })
    })
    return logoutButton
  } else {
    const container = document.createElement('div')
    container.innerHTML = `
      <a href="/login/"><button class="">Iniciar Sesión</button></a>
      <a href="/register/"><button class="header__nav__container__buttons__register">Registrarse</button></a>
    `
    return container
  }

}