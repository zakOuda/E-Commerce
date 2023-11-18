import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrum";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Meta title={"Our Contact"} />
      <BreadCrumb title='Our Contact' />
      <div className='contact-wrapper-1 home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                title='MyHomeYAEEL'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.356260074866!2d35.97115396334284!3d35.34680395863231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523ffb9e40e8d8b%3A0x9c80ffa2c2e9d389!2z2LHZiNmK2LPZhyDYp9mE2K3YrNmE!5e0!3m2!1sen!2s!4v1699632468315!5m2!1sen!2s'
                width='600'
                height='450'
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-wrapper-2 d-flex justify-content-between gap-10'>
                <div className='col-6'>
                  <h5 className='contact-title m-0'>Contact</h5>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Email *'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        className='w-100 form-control'
                        id=''
                        cols='30'
                        rows='4'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <button className='button w-25 m-3'>Submit</button>
                  </form>
                </div>
                <div className='col-6'>
                  <h5 className='contact-title m-0'>Get In Touch With Us</h5>
                  <div>
                    <ul className='ps-0'>
                      <li className='d-flex align-items-center gap-15'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Syria, Damascus, Jableh YAEEL
                        </address>
                      </li>
                      <li className='d-flex align-items-center gap-15'>
                        <BiPhoneCall className='fs-5' />
                        <Link to={``} className='contact-link'>
                          +963 931673775
                        </Link>
                      </li>
                      <li className='d-flex align-items-center gap-15'>
                        <AiOutlineMail className='fs-5' />
                        <Link
                          to={`zakaraya.oudaimah@gmail.com`}
                          className='contact-link'
                        >
                          zakaraya.oudaimah@gmail.com
                        </Link>
                      </li>
                      <li className='d-flex align-items-center gap-15'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>{new Date().getFullYear()}</p>
                      </li>
                    </ul>
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

export default Contact;
