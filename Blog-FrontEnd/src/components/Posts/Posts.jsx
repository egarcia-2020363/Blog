import { useEffect, useState } from 'react';
import { CardPost } from './CardPost';
import './Posts.css';
import { Navbar } from "../Navbar";
import { AppLayout } from '../AppLayout';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:3620/v1/post/getAllPosts');
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
    <AppLayout>
      <div className="posts-grid">
        {isLoading ? (
          <p>Cargando publicaciones...</p>
        ) : (
          posts.map((post) => (
            <CardPost
              key={post._id}
              title={post.title}
              content={post.content}
              course={post.course}
              date={post.date}
              link={post.link}
              id={post._id}
            />
          ))
        )}
      </div>
      </AppLayout>
    </>
  );
};
