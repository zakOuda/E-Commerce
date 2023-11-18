import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot-Password"} />
      <BreadCrumb title='Forgot-password' />
      <div className='reset-password-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='reset-password-cart'>
                <h4 className='text-center mb-3'>Reset Your Password</h4>
                <p>We will send you an email to reset your password</p>
                <form
                  action='onSubmit'
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("onSubmit");
                  }}
                  className='d-flex flex-column gap-15'
                >
                  <div>
                    <input
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      type='email'
                    />
                  </div>
                  <div className='d-flex flex-column gap-10 align-items-center justify-content-center'>
                    <button className='button border-0' type='submit'>
                      Submit
                    </button>
                    <button className='button  cancel border-0'>Cancel</button>
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

export default ForgotPassword;
