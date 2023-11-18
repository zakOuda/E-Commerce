import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free Shopping Over $100 Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:{" "}
                <a className='text-white' href='tel: +963931673775'>
                  +963 931673775
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Dev Corner</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Search Product Here ...'
                  aria-label='Search Product Here ...'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div className='header-upper-links-1'>
                  <Link
                    to={`/compare-product`}
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src='images/compare.svg'
                      className='compare'
                      alt='compare'
                    />
                    <p className=' mb-0'>
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div className='header-upper-links-2'>
                  <Link
                    to={`/wishlist`}
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src='images/wishlist.svg'
                      className='wishlist'
                      alt='wishlist'
                    />
                    <p className='mb-0'>Favourite</p>
                  </Link>
                </div>
                <div className='header-upper-links-3'>
                  <Link
                    to={`/login`}
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/user.svg' className='login' alt='login' />
                    <p className='mb-0'>LogIn</p>
                  </Link>
                </div>
                <div className='header-upper-links-4'>
                  <label className='showMore' htmlFor='_1'>
                    <div className='d-flex align-items-center gap-10 text-white'>
                      <img src='images/cart.svg' className='cart' alt='cart' />
                      {/* <div className='d-flex flex-column gap-10'></div> */}
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </label>
                  <input id='_1' type='checkbox' />
                  <div className='hide-cart-column d-flex flex-column align-items-center gap-30'>
                    <div className='mt-3'>
                      <Link to={`/cart`} className='text-dark fs-5'>
                        Go To Your Cart
                      </Link>
                    </div>
                  </div>

                  {/* <Link
                    // to={`/cart`}
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/cart.svg' className='cart' alt='cart' />
                    <div className='d-flex flex-column gap-10'></div>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>$ 500</p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className='dropdown'>
                  <button
                    className='me-5 btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img src='images/menu.svg' alt='menu' />
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item text-white' to={`/`}>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item text-white' to={`/`}>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item text-white' to={`/`}>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/store`}>Our Store</NavLink>
                    <NavLink to={`/blog`}>Blogs</NavLink>
                    <NavLink to={`/contact`}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
