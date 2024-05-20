import logo from "../../assets/logo.jpg"
import { GiHotMeal } from "react-icons/gi";
import "./navbar.css"
function Navbar() {
  return (
    <nav className="Navbar">
        <div>
            <img src={logo} className="logo" alt="Logo"/>
        </div>
     <ul className="navbar-links">

        <li className="navbar-item">
            <a href="#">Home</a>
        </li>

        <li className="navbar-item">
            <a href="#">Menus</a>
        </li>

        <li className="navbar-item">
            <a href="#">Ubicacion</a>
        </li>
    </ul>
    <div className="comidas">
    <GiHotMeal size="30px"/>
    <span className="badge">0</span>

    </div>

    </nav>
   
  )
}

export default Navbar