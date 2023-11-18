import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCart = (props) => {
  const { grid } = props;
  const { product } = props;
  const location = useLocation();
  // console.log(product);
  // console.log(location);
  return (
    <>
      <div
        className={location.pathname === "/store" ? `mycol-${grid}` : `col-3`}
      >
        <div className='product-cart position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link to={``}>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              src={`images/watch.jpg`}
              className='img-fluid'
              alt='productimage'
            />
            <img
              src='images/watch-1.jpg'
              className='img-fluid'
              alt='productimage'
            />
          </div>
          <Link to={`/store`} className='product-details'>
            <h6 className='brand'>Havel</h6>
            <h5 className='product-title'>title</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='#ffd700'
            />
            <p
              className={`description mt-3 ${
                grid === 12 ? `d-block` : `d-none`
              }`}
            >
              descending
            </p>
            <p className='price mt-5'>$ 100.00</p>
          </Link>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link to={``}>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link to={``}>
                <img src='images/view.svg' alt='view' />
              </Link>
              <Link to={``}>
                <img src='images/add-cart.svg' alt='add-car' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
