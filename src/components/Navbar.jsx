import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/logo2.png'

function Navbar() {
  return (
    <header>
      <div className="top-area">
        <h1 className="logo">
          <Link to="/"><img src={logoImg} alt="MealLight 로고" /><span>MEAL</span><span>LIGHT</span></Link>
        </h1>
      </div>
      <nav className="gnb">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/meals">식단관리</NavLink>
        <NavLink to="/tips">건강팁</NavLink>
        <NavLink to="/about">MEALLIGHT</NavLink>
      </nav>
    </header>
  )
}
export default Navbar
