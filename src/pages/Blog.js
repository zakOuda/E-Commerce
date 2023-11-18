import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrum";
import BlogCart from "../components/BlogCart";
const Blog = () => {
  return (
    <>
      <Meta title={"Our Blogs"} />
      <BreadCrumb title='Our Blogs' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Find by Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='row d-flex flex-wrap'>
                <div className='col-6 mb-3'>
                  <BlogCart />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCart />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCart />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
