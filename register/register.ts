import '../src/global.scss'
import './register.scss'


const token = localStorage.getItem('token')
if (token != null) location.href = '/'