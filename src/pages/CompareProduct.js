import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Our Compare-product"} />
      <BreadCrumb title='Our Compare-product' />
      <div className='compare-product-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='compare-product-cart position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute cross'
                />
                <div className='compare-product-image'>
                  <img
                    src='images/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch'
                  />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Honor T1 1G RAM 8G ROM 7Inch with WiFi+3G Table
                  </h5>
                  <h6 className='price'>$ 100.00</h6>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Brand:</h5>
                    <p>Havel</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Type:</h5>
                    <p>Table Computers</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>SKU:</h5>
                    <p>SKU003</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>color:</h5>
                    <div>
                      <Color />
                    </div>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Size:</h5>
                    <p>L M S</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-cart position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute cross'
                />
                <div className='compare-product-image'>
                  <img
                    src='images/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch'
                  />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Honor T1 1G RAM 8G ROM 7Inch with WiFi+3G Table
                  </h5>
                  <h6 className='price'>$ 100.00</h6>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Brand:</h5>
                    <p>Havel</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Type:</h5>
                    <p>Table Computers</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>SKU:</h5>
                    <p>SKU003</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>color:</h5>
                    <div>
                      <Color />
                    </div>
                  </div>
                  <div className='product-detail d-flex justify-content-between align-items-center'>
                    <h5>Size:</h5>
                    <p>L M S</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
