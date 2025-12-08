import React from "react";
import { useParams } from "react-router-dom";
import blogData from '../../fakeDB.json'; // Adjust the path as needed

const BlogDetail = () => {
  const { id } = useParams();
    const postId = parseFloat(id.replace(":", ""));
console.log( postId);
    // Log the id for debugging purposes

  // Convert the id to a number and retrieve the post from blogData
  const post = blogData.filter((post) => post.id === (postId))[0];
  console.log(post); // Log the post for debugging purposes

  if (!post) {
    return <div className="text-center p-6">Blog post not found</div>;
  }

  return (
    <div className="max-w-full mx-auto rounded-none">
      <div className="card bg-base-100 w-full rounded-none shadow-sm dark:bg-gray-800 dark:text-gray-200">
        {/* <figure>
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-64"
          />
        </figure> */}
        <div className="card-body ">
          <h2 className="card-title text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-400"><strong>Author:</strong> {post.author}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Date:</strong> {post.date}</p>
          <p className="mt-4 text-base-content dark:text-gray-300">{post.content}</p>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
