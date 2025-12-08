import React from "react";
import { Link, useNavigate } from "react-router-dom";
import blogData from '../../fakeDB.json'; // Adjust the path as needed
import TitleSection from "../../components/TitleSection/TitileSection";

const Blogs = () => {
  const navigate = useNavigate();

  // const handleReadMore = (id) => {
  //   navigate(`/blog/${id}`);
  // };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white ">
      <TitleSection header={"Latest Blogs"} helmet={"Blogs"}></TitleSection>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {blogData.map((post, index) => (
        <div key={index} className="card bg-base-100 shadow-sm dark:bg-gray-800 dark:text-gray-200">
          {/* <figure>
            <img
              src={post.image}
              alt={post.title}
              className="object-cover h-48 w-full"
            />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title font-bold text-base-content dark:text-gray-200">{post.title}</h2>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Date:</strong> {post.date}</p>
            <p className="text-base-content dark:text-gray-400">{post.content.substring(0, 100)}...</p><Link to={`/blog/:${post.id}`} className=" text-center bg-blue-500 text-white   dark:bg-blue-500 dark:text-white   hover:bg-blue-700 dark:hover:bg-blue-700 p-2 rounded-lg shadow-lg">Read more</Link>  {/* Display a snippet of the content */}
        
          </div>
        </div>
      ))}
      </div>
      </div>
  );
};

export default Blogs;
