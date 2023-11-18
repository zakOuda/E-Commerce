import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title='Sign Up' />
      <div className='signup-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='signup-cart'>
                <h4 className='text-center mb-4'>Sign Up</h4>
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
                      placeholder='First Name'
                      name='First Name'
                      type='text'
                    />
                  </div>
                  <div>
                    <input
                      className='form-control'
                      placeholder='Last Name'
                      name='Last Name'
                      type='text'
                    />
                  </div>
                  <div>
                    <input
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      type='email'
                    />
                  </div>
                  <div>
                    {/* <div className='input-group'>
                      <input
                        type={passwordType}
                        onChange={() => {
                          handlePasswordChange();
                        }}
                        value={passwordInput}
                        name='password'
                        className='form-control'
                        placeholder='Password'
                      />
                      <div className='input-group-btn'>
                        <button
                          className='btn btn-outline-primary'
                          onClick={() => {
                            togglePassword();
                          }}
                        >
                          {passwordType === "password" ? (
                            <i>Show</i>
                          ) : (
                            <i>Hide</i>
                          )}
                        </button>
                      </div>
                    </div> */}
                    <input
                      className='form-control'
                      name='password'
                      type='password'
                      placeholder='Password'
                      id='My-password'
                    />
                    {/* <input
                      type='checkbox'
                      onClick={() => {
                        myFunction();
                      }}
                    />
                    Show Password */}
                  </div>
                  <div className='d-flex gap-15 align-items-center justify-content-center'>
                    <button className='button border-0' type='submit'>
                      Sign Up
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

export default Signup;
