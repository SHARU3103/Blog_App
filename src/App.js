import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './component/SearchBar';
import BlogList from './component/BlogList';
import BlogDetails from './component/BlogDetails';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API Error');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">📝 Mini Blog App</h1>

      {loading && <p className="text-center text-blue-600">Loading posts...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div className="max-w-3xl mx-auto">
          {selectedPost ? (
            <BlogDetails post={selectedPost} onBack={() => setSelectedPost(null)} />
          ) : (
            <>
              <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
              <BlogList posts={filteredPosts} onSelect={setSelectedPost} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
