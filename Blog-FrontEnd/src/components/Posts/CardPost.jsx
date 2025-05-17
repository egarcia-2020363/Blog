import { Link } from "react-router-dom";
import "./CardPosts.css";

export const CardPost = ({ id, title, content, course, date, link }) => {
  return (
    <div className="card-post">
      <div className="card-header">
            <h2>{title}</h2>
      </div>
        <p><strong></strong> {course}</p>
        <p id='card-content'>{content}</p>
        <p><small>{new Date(date).toLocaleDateString()}</small></p>
      <Link to={`${link}`}>Proyecto</Link><br></br>
      <Link to={`/post/${id}`}>Ver más</Link>
    </div>
  );
};

