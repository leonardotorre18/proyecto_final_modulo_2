import { type IPost } from "../types/IPost"

export default (data: IPost): HTMLElement => {
  const Card = document.createElement('div')
  Card.classList.add('main__grid__card')
  Card.innerHTML = `
    <div class="main__grid__card__img">
      <img src="${data.img.url}" alt="">
    </div>
    <div class="main__grid__card__container">
      <h4>${data.title}</h4>
      <button>Leer Más</button>
    </div>
  `
  Card.addEventListener('click', () => {
    window.location.href = `/post/?id=${data._id}`
  })
  return Card
}