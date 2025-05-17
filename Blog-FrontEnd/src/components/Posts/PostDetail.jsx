import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostDetail.css';

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: "", content: "" });

  const fetchPost = async () => {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
    setPost(data.post);
  };

  const fetchComments = async () => {
    const res = await fetch(`/api/comments/byPost/${id}`);
    const data = await res.json();
    setComments(data.comments || []);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/comments/add/${id}`, {
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
    <div className="post-container">
      <h2>{post.title}</h2>
      <p><strong>Curso:</strong> {post.course}</p>
      <p>{post.content}</p>
      <p><small>Publicado el: {new Date(post.date).toLocaleDateString()}</small></p>

      <div className="comments-section">
        <h3>Comentarios</h3>
        {comments.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="comment">
              <strong>{c.author}</strong>
              <p>{c.content}</p>
              <small>{new Date(c.date).toLocaleString()}</small>
            </div>
          ))
        )}

        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            required
          />
          <textarea
            placeholder="Escribe un comentario"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            required
          ></textarea>
          <button type="submit">Comentar</button>
        </form>
      </div>
    </div>
  );
};