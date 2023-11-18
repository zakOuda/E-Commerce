import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title='Reset Password' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='login-cart'>
                <h4 className='text-center mb-4'>Reset Your Password</h4>
                <form
                  action='onSubmit'
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("onSubmit");
                  }}
                  className='d-flex flex-column gap-30'
                >
                  <div>
                    <input
                      className='form-control'
                      placeholder='password'
                      name='password'
                      type='password'
                    />
                  </div>
                  <div>
                    <input
                      className='form-control'
                      name='password'
                      type='password'
                      placeholder='Confirm Password'
                    />
                  </div>
                  <div className='d-flex gap-15 align-items-center justify-content-center'>
                    <button className='button border-0' type='submit'>
                      Ok
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
