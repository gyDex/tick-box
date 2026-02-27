import { Link } from "react-router-dom"
import "./welcome.scss"

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-card">
        <h1>
          Добро пожаловать! 
          <span className="wave"> 👋</span>
        </h1>
        <p>Мы рады видеть вас</p>
        <Link to="/menu" className="welcome-btn">
          Перейти к меню
        </Link>
      </div>
    </div>
  )
}