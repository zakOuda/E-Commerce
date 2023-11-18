import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <>
      <div className='blog-cart'>
        <div className='card-img'>
          <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>1 Dec 2023</p>
          <h5 className='title'> A beautiful Sunday morning renaissance</h5>
          <p className='desc'>
            It's prevents the sun light and protects your eyes with hd Full
            screen like reality
          </p>
          <Link to={`/blog/:id`} className='button'>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCart;
