import "./404.css"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='notfound'>
        <h1>404</h1>
        <h2>Aradığınız Sayfa bulunamadı <Link to="/">ana sayfaya dön</Link> </h2>
    </div>
  )
}
