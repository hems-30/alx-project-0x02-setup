import React from 'react';
import { type PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default PostsPage;