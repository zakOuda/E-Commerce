import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  // function myFunction() {
  //   var x = document.getElementById("My-password");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
  /*   const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  }; */
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title='Login' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='login-cart'>
                <h4 className='text-center mb-4'>Login</h4>
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
                  <div>
                    <Link className='forgot' to={`/forgot-password`}>
                      Forgot Password ?
                    </Link>
                  </div>
                  <div className='d-flex gap-15 align-items-center justify-content-center'>
                    <button className='button border-0' type='submit'>
                      Login
                    </button>
                    <Link to={`/signup`} className='button  signup'>
                      Signup
                    </Link>
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

export default Login;
