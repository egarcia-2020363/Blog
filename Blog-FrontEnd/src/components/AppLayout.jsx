import { Navbar } from "./Navbar";
import "./Layout.css";

export const AppLayout = ({ children, onSortChange }) => {
  const handleChange = (e) => {
    onSortChange(e.target.value);
  };
  return (
    <div className="layout">
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li><strong>4° Grado</strong></li>
            <li><strong>5° Grado</strong></li>
            <li><strong>6° Grado</strong></li>
          </ul>
          <div className="sort-filter">
            <label>Ordenar por:</label>
            <select onChange={handleChange}>
              <option value="">--Seleccionar--</option>
              <option value="recent">Más reciente</option>
              <option value="oldest">Más antiguo</option>
              <option value="taller">TALLER</option>
              <option value="tecnologia">TECNOLOGÍA</option>
              <option value="practica">PRÁCTICA SUPERVISADA</option>
            </select>
          </div>
        </aside>
        <section className="content">{children}</section>
      </div>
    </div>
  );
};
