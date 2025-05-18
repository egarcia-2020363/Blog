import { useEffect, useState } from 'react';
import { CardPost } from './CardPost';
import './Posts.css';
import { AppLayout } from '../AppLayout';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:3620/v1/post/getAllPosts');
      const data = await res.json();
      setPosts(data.posts || []);
      setFilteredPosts(data.posts || []);
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    let result = [...posts];

    if (sortOption === "recent") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "taller") {
      result = posts.filter(p => p.course.toLowerCase() === "taller");
    } else if (sortOption === "tecnologia") {
      result = posts.filter(p => p.course.toLowerCase() === "tecnología");
    } else if (sortOption === "practica") {
      result = posts.filter(p => p.course.toLowerCase() === "práctica supervisada");
    }

    setFilteredPosts(result);
  }, [sortOption, posts]);

  return (
    <AppLayout onSortChange={setSortOption}>
      <div className="posts-grid">
        {isLoading ? (
          <p>Cargando publicaciones...</p>
        ) : (
          filteredPosts.map((post) => (
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
  );
};
