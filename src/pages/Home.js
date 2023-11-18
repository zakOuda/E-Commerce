import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../components/BlogCart";
import ProductCart from "../components/ProductCart";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/ProductsSlices";
const Home = () => {
  //const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // alert(grid)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Meta title={"Home"} />
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img
                  src='images/main-banner.jpg'
                  className='img-fluid rounded-3'
                  alt='mainBanner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $10.000 or $100.00/mo</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE.</h4>
                    <h5>Laptops Max.</h5>
                    <p>
                      From $10.000 <br />
                      or $100.00/mo
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL.</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From $10.000 <br />
                      or $100.00/mo
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL.</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From $10.000 <br />
                      or $100.00/mo
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL.</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From $10.000 <br />
                      or $100.00/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From All Order $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className='mb-0'>Save Up To 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop With an Expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable prices</h6>
                    <p className='mb-0'>Get factory default price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='...' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='...' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Headphone</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='...' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='...' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='...' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Headphone</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='...' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Features Collection</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
      <section className='famous-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-cart text-white position-relative'>
                <img
                  src='images/famous-1.jpg'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $300 or 16.60/mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart text-dark position-relative'>
                <img
                  src='images/famous-2.webp'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5>Big Laptop</h5>
                  <h6>Smart Laptop Gaming Series</h6>
                  <p>From $200 or 1450.60/mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart text-dark position-relative'>
                <img
                  src='images/famous-3-1.jpg'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5>Big Mobile</h5>
                  <h6>Smart mobile Gaming Series</h6>
                  <p>From $400 or 100.60/mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart text-dark position-relative'>
                <img
                  src='images/famous-4-1.jpg'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5>Big Sound</h5>
                  <h6>Smart Sound Series</h6>
                  <p>From $100 or 60.60/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products:</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
                <Marquee>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our latest News</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCart />
            </div>
            <div className='col-3'>
              <BlogCart />
            </div>
            <div className='col-3'>
              <BlogCart />
            </div>
            <div className='col-3'>
              <BlogCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
