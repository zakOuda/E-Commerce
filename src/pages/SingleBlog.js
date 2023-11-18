import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
const SingleBlog = () => {
  return (
    <>
      {/* <div className='filter-card mb-3'>
                <h3 className='filter-title'>Find by Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div> */}
      <Meta title={"Single Blog"} />
      <BreadCrumb title='Single Blog Title' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-cart'>
                <Link to={`/blog`} className='d-flex gap-15 align-items-center'>
                  <HiOutlineArrowLeft className='fs-5' />
                  Back To Blog
                </Link>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src='images/blog-1.jpg'
                  className='img-fluid w-100 my-4'
                  alt='blog-1'
                />
                <p>
                  A Beautiful Sunday Morning Renaissance, It's prevents the sun
                  light and protects your eyes with hd Full screen like reality.
                  A Beautiful Sunday Morning Renaissance. A Beautiful Sunday
                  Morning Renaissance A Beautiful Sunday Morning Renaissance A
                  Beautiful Sunday Morning Renaissance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
