import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <div
        className='py-5 d-flex flex-column align-items-center justify-content-center'
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <div className='login my-3 p-3 w-25 bg-white rounded-3 mx-auto'>
          <h3 className='text-center'>Reset Password</h3>
          <p className='text-center'>Please inter your new password</p>
          <form
            action='submit'
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <CustomInput
              type={`password`}
              i_id={`password`}
              label={`New password`}
            />
            <CustomInput
              type={`password`}
              i_id={`confirmPassword`}
              label={`Confirm password`}
            />
            <button
              type='submit'
              style={{ background: "#ffd333" }}
              className='btn py-3 btn-primary border-0 w-100'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
