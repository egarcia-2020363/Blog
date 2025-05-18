import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: "", content: "" });

  const fetchPost = async () => {
    const res = await fetch(`http://localhost:3620/v1/post/getPost/${id}`);
    const data = await res.json();
    setPost(data.post);
  };

  const fetchComments = async () => {
    const res = await fetch(`http://localhost:3620/v1/comment/byPost/${id}`);
    const data = await res.json();
    setComments(data.comments || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3620/v1/comment/add/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
    if (res.ok) {
      setNewComment({ author: "", content: "" });
      fetchComments();
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  if (!post) return <p>Cargando publicación...</p>;

  return (
    <div className="post-detail-layout">
      <aside className="comments-panel">
        <h3>Comentarios</h3>
        <div className="list">
        {comments.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="comment">
              <strong>{c.author}</strong>
              <p>{c.content}</p>
              <small>{new Date(c.date).toLocaleDateString()}</small>
            </div>
          ))
        )}
        </div>
        <Link to={`/`}>Volver</Link>
      </aside>

      <main className="post-main">
        <div className="post-card">
          <h2>{post.title}</h2>
          <p><strong>{post.course}</strong></p>
          <p>{post.content}</p>
          <p><small>{new Date(post.date).toLocaleDateString()}</small></p>
          <Link to={`${post.link}`}>Ir al proyecto</Link>
        </div>
      </main>

      <aside className="comment-form">
        <h3>Agregar comentario</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            required
          />
          <textarea
            placeholder="Escribe tu comentario"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </aside>

      
    </div>
  );
};
