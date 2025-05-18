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
            <li>
                <a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/egarcia-2020363_kinal_edu_gt/EsZ9qwk30kRBiXY_zbPw1gMBYNDSZYFEPIp0Im8NUWBAhQ?e=YnYrSR" target="_blank">
                <strong>4° Grado</strong>
                </a>
            </li>
            <li>
                <a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/egarcia-2020363_kinal_edu_gt/EpVTNz-kZBpEmv7-pNtZE9UBnbImMuZJMnBspESOyZhSVg?e=qbrwsJ" target="_blank">
                <strong>5° Grado</strong>
                </a>
            </li>
            <li>
                <a href="https://cetkinal-my.sharepoint.com/:f:/g/personal/egarcia-2020363_kinal_edu_gt/EhFBHipVD_VFi260W0M_XyUBqZoQdcSaIWI28G88xUTPmQ?e=YbJu6k" target="_blank">
                <strong>6° Grado</strong>
                </a>
            </li>
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
