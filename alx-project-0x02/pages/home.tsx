import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'Card One', content: 'This is the content of the first card.' },
    { title: 'Card Two', content: 'Here is some different content for the second card.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={addPost}
      />
    </div>
  );
};

export default Home;