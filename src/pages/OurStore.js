import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../components/ProductCart";
import Color from "../components/Color";
import { useSelector } from "react-redux";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const products = useSelector((state) => state.products);
  // console.log(products);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title='Our Store' />
      <div className='store-wrapper home-wrapper-2 py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card'>
                <h3 className='filter-title'>Shope by Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availablity</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='instoke'
                      />
                      <label className='form-check-label' htmlFor='instoke'>
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='outofstok'
                      />
                      <label className='form-check-label' htmlFor='outofstok'>
                        Out Of Stock
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <h5 className='sub-title'>$</h5>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='From'
                        placeholder='From'
                      />
                      <label htmlFor='From'>From</label>
                    </div>
                    <h5 className='sub-title'>$</h5>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='To'
                        placeholder='To'
                      />
                      <label htmlFor='To'>To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Color</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-1'
                    />
                    <label className='form-check-label' htmlFor='color-1'>
                      S (2)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-2'
                    />
                    <label className='form-check-label' htmlFor='color-2'>
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className='filter-card'>
                <h3 className='filter-title'>Product Tags</h3>
                <div className='product-tags d-flex align-items-center flex-wrap gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    HeadPhones
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Wire
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptop
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Watches
                  </span>
                </div>
              </div>
              <div className='filter-card'>
                <h3 className='filter-title'>Random Product</h3>
                <div className='random-products mb-3 d-flex'>
                  <div className='w-50 mt-2'>
                    <img
                      src='images/watch.jpg'
                      className='img-fluid'
                      alt='watch'
                    />
                  </div>
                  <div className='w-50 mt-'>
                    <h5>Kids Like This Watch for Our Store friends</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <b>$ 100</b>
                  </div>
                </div>
                <div className='random-products mb-3 d-flex'>
                  <div className='w-50 mt-2'>
                    <img
                      src='images/watch.jpg'
                      className='img-fluid'
                      alt='watch'
                    />
                  </div>
                  <div className='w-50 mt-'>
                    <h5>Kids Like This Watch for Our Store friends</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <b>$ 100</b>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 ' style={{ width: "100px" }}>
                      Sort By
                    </p>
                    <select
                      defaultValue='Best-Selling'
                      name=''
                      // style={{ width: "300px" }}
                      className='form-control form-select'
                      id=''
                    >
                      <option value='manual'>Featured</option>
                      <option value='price-ascending'>Price low to high</option>
                      <option value='price-descending'>
                        Price high to low
                      </option>
                      <option value='Best-Selling'>Best Selling</option>
                      <option value='title-ascending'>Alpha A-Z</option>
                      <option value='title-descending'>Alpha Z-A</option>
                      <option value='created-ascending'>Date old to new</option>
                      <option value='created-descending'>
                        Date new to old
                      </option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center'>
                    <p className='total-products mb-0 me-4'>21 products</p>
                    <div className='grid d-flex align-items-center gap-10'>
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src='images/gr4.svg'
                        className='d-block img-fluid'
                        alt='sorting'
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src='images/gr3.svg'
                        className='d-block img-fluid'
                        alt='sorting'
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src='images/gr2.svg'
                        className='d-block img-fluid'
                        alt='sorting'
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src='images/gr.svg'
                        className='d-block img-fluid'
                        alt='sorting'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list d-flex flex-wrap gap-10 mt-2 align-items-center'>
                {products &&
                  products.map((prod) => {
                    return (
                      <ProductCart key={prod.id} grid={grid} product={prod} />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
