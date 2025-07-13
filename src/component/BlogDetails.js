import React from 'react';

const BlogDetails = ({ post, onBack }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <button
        onClick={onBack}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back to list
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
