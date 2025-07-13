import React from 'react';

const BlogList = ({ posts, onSelect }) => {
  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelect(post)}
          className="cursor-pointer p-4 bg-white shadow hover:shadow-md rounded border border-gray-200 hover:bg-gray-50 transition-all"
        >
          <h3 className="text-lg font-semibold text-blue-700">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
