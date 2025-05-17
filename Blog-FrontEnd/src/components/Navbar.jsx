import "./Navbar.css";
import logo from '../assets/blog-web.png'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog de Aprendizaje</h1>
      <img src={logo} alt="Logo" className="navbar-logo" />
    </nav>
  );
};
