import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Carts"} />
      <BreadCrumb title='Carts' />
      <div className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header'>
                <div className='mb-4 d-flex align-items-center justify-content-between'>
                  <h4 className='card-col-4'>PRODUCT</h4>
                  <h4 className='card-col-3'>PRICE</h4>
                  <h4 className='card-col-2'>Qtn</h4>
                  <h4 className='card-col-1'>TOTAL</h4>
                </div>
              </div>
              <div className='card-body d-flex'>
                <div className='card-col-4 d-flex gap-30 mb-5 mt-5'>
                  <img
                    src='images/watch.jpg'
                    className='img-fluid'
                    alt='watch'
                  />
                  <div className='d-flex flex-column gap-15 me-4'>
                    <h5 className='title'>
                      Kids Headphone bulk 10 pack multi colored for students
                    </h5>
                    <p className='color'>Size: M</p>
                    <p className='size'>Color: #ffd700</p>
                  </div>
                </div>
                <div className='card-col-3 d-flex align-items-center'>
                  <p className='fs-5'>$100.0</p>
                </div>
                <div className='card-col-2 d-flex align-items-center gap-30'>
                  <input
                    type='number'
                    className='form-control'
                    min={1}
                    max={10}
                    // value={1}
                  />
                  <Link className='text-dark'>
                    <RiDeleteBin6Line className='delete' />
                  </Link>
                </div>
                <div className='card-col-1 d-flex align-items-center'>
                  <p className='fs-5'>$100.00</p>
                </div>
              </div>
              <div className='card-buttons'>
                <div>
                  <button className='button'>Continue Shopping</button>
                  <div className='d-flex justify-content-between'>
                    <p>order special instruction</p>
                    <div className='d-flex flex-column align-items-end gap-30'>
                      <div className='d-flex gap-15 align-items-center'>
                        <h5>SubTotal</h5>
                        <p className='fs-5'>$ 100.00</p>
                      </div>
                      <div className='d-flex flex-column align-items-end'>
                        <h5 className='mb-3'>
                          Texas And Shipping Calculated at Check Out
                        </h5>
                        <button className='button mt-0 w-100'>
                          <Link className='text-white'>Check Out</Link>
                        </button>
                      </div>
                    </div>
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

export default Cart;
