import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, userId, title, body }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md mb-4">
      {/* id can be used if needed, or ignored */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{body}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;