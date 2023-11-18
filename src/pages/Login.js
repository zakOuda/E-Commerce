import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();
  // let [error, setError] = useState(true);

  return (
    <>
      <div
        className='py-5 d-flex flex-column align-items-center justify-content-center'
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <div className='login my-3 p-3 w-25 bg-white rounded-3 mx-auto'>
          <h3 className='text-center'>Login</h3>
          <p className='text-center'>Login to your account to continue</p>
          <form
            // action='submit'
            onClick={(e) => {
              e.preventDefault();
              // console.log("true");
              navigate("/admin");
              // console.log("true");
              // setError(false);
            }}
          >
            <CustomInput
              type={`email`}
              i_id={`email`}
              label={`Enter Your email`}
            />
            <CustomInput
              type={`text`}
              i_id={`pass`}
              label={`Enter Your pass`}
            />
            <div className='d-flex justify-content-between mb-4 mt-4'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='remember'
                />
                <label className='form-check-label' htmlFor='remember'>
                  Remember me
                </label>
              </div>
              <div>
                <p>
                  <Link
                    to={`/forgot-password`}
                    className='fw-bold text-dark text-decoration-none fs-6 m-0'
                  >
                    Forgot Password ?
                  </Link>
                </p>
              </div>
            </div>
            <Link
              // to={`/admin`}
              type='submit'
              style={{ background: "#ffd333" }}
              className='btn py-3 btn-primary border-0 w-100'
            >
              Login
            </Link>
          </form>
        </div>
        {/* <div
          style={{ display: error ? `block` : "none" }}
          className={`text-center fw-bold text-danger my-3 p-3 w-25 bg-white rounded-3 mx-auto`}
        >
          <BiErrorCircle className='m-0 fs-4' /> Invalid Password or userName
        </div> */}
      </div>
    </>
  );
};

export default Login;
