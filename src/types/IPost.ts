export interface IPost {
  _id: string
  img: {
    url: string
    id: string
  }
  user: {
    _id: string
    name: string
    email: string
  }
  body: string
  title: string
}