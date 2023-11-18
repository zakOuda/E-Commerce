import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
const WishList = () => {
  return (
    <>
      <Meta title={"WishList"} />
      <BreadCrumb title='WishList' />
      <div className='wish-list-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='wish-list-cart position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute cross'
                />
                <div className='wish-list-image'>
                  <img
                    src='images/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch'
                  />
                </div>
                <div className='wish-list-details'>
                  <h5 className='title'>
                    Honor T1 1G RAM 8G ROM 7Inch with WiFi+3G Table
                  </h5>
                  <h6 className='price'>$ 100.00</h6>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wish-list-cart position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute cross'
                />
                <div className='wish-list-image'>
                  <img
                    src='images/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch'
                  />
                </div>
                <div className='wish-list-details'>
                  <h5 className='title'>
                    Honor T1 1G RAM 8G ROM 7Inch with WiFi+3G Table
                  </h5>
                  <h6 className='price'>$ 100.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
