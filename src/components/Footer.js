import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex align-items-center gap-15'>
                <img src='images/newsletter.png' alt='news' />
                <h2 className='mb-0 text-white'>Sing Up For News Letter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Your Email Address'
                  aria-label='Your Email Address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='mb-4 text-white'>Contact us</h4>
              <div>
                <address className='fs-5 text-white m-0'>
                  E-commerce Company
                  <br />
                  PinCode: 4671
                  <br />
                  Syria: Damascus, Mazzeh Street
                </address>
                <a href='/' className='mt-3 mb-2 d-block text-white'>
                  +963 931673775
                </a>
                <a href='/' className='mt-2 mb-2 d-block text-white'>
                  zakaraya.oudaimah@gmial.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30'>
                  <a className='text-white' href='/'>
                    <BsLinkedin className='fs-5' />
                  </a>
                  <a className='text-white' href='/'>
                    <BsGithub className='fs-5' />
                  </a>
                  <a className='text-white' href='/'>
                    <BsYoutube className='fs-5' />
                  </a>
                  <a className='text-white' href='/'>
                    <BsInstagram className='fs-5' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='mb-4 text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={`/privacy-policy`} className='text-white mb-1 py-2'>
                  Privacy Policy
                </Link>
                <Link to={`/refund-policy`} className='text-white mb-1 py-2'>
                  Refund Policy
                </Link>
                <Link to={`/shipping-policy`} className='text-white mb-1 py-2'>
                  Shipping Policy
                </Link>
                <Link to={`/terms-condition`} className='text-white mb-1 py-2'>
                  Terms & Conditions
                </Link>
                <Link to={`/blog`} className='text-white mb-1 py-2'>
                  Blogs
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='mb-4 text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>About Us</Link>
                <Link className='text-white mb-1 py-2'>Faq</Link>
                <Link className='text-white mb-1 py-2'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='mb-4 text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>HeadPhones</Link>
                <Link className='text-white mb-1 py-2'>Tablet</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy: {new Date().getFullYear()} Powered By Developers Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
