import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrum";
import Meta from "../components/Meta";
import ProductCart from "../components/ProductCart";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";

const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const [ordered, setOrderd] = useState(true);
  const img = {
    width: 630,
    height: 570,
    zoomWidth: 570,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <>
      <Meta title={"Product Title"} />
      <BreadCrumb title='Product Title' />
      <div className='main-product-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='main-product-inner d-flex'>
              <div className='col-6'>
                <div className='main-product-image'>
                  <div>
                    <ReactImageZoom {...img} />
                  </div>
                </div>
                <div>
                  <div className='other-product-image d-flex flex-wrap gap-15'>
                    <div>
                      <img
                        src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='main-product-details'>
                  <div className='border-bottom mb-3'>
                    <h5 className='title'>
                      HeadPhons Kids Bulk 10 pack multiple Colored For Student
                    </h5>
                  </div>
                  <div className='border-bottom mb-3'>
                    <p className='price'>$ 100.00</p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <Link className='text-dark mb-3 mt-3'>write a review</Link>
                  </div>
                  <div className='border-bottom mb-3'>
                    <div className='d-flex gap-10'>
                      <h5 className='title-desc'>Type:</h5>
                      <p className='border-desc'>HeadSets</p>
                    </div>
                    <div className='d-flex gap-10'>
                      <h5 className='title-desc'>Brand:</h5>
                      <p className='border-desc'>Havel</p>
                    </div>
                    <div className='d-flex flex-column'>
                      <h5 className='title-desc'>Categories:</h5>
                      <p className='border-desc'>
                        Laptop, Cameras , Watches , our Stor ,Laptop, Cameras ,
                        Watches , our Stor ,Laptop, Cameras , Watches , our Stor
                        ,Laptop, Cameras , Watches , our Stor
                      </p>
                    </div>
                    <div className='d-flex gap-10'>
                      <h5 className='title-desc me-3'>Tags:</h5>
                      <p className='border-desc'>HeadPhon laptop opp speaker</p>
                    </div>
                    <div className='d-flex gap-10'>
                      <h5 className='title-desc'>SKU:</h5>
                      <p className='border-desc'>SKU027</p>
                    </div>
                    <div className='d-flex gap-10'>
                      <h5 className='title-desc'>Availability:</h5>
                      <p className='border-desc'>500 In Stoke</p>
                    </div>
                    <div className='d-flex flex-column gap-10'>
                      <h5 className='title-desc'>Size:</h5>
                      <div>
                        <div className=' d-flex gap-15 mb-3'>
                          <div className='size d-flex align-items-center justify-content-center '>
                            <p className='mb-0'>S</p>
                          </div>
                          <div className='size d-flex align-items-center justify-content-center '>
                            <p className='mb-0'>L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex flex-column mb-3'>
                      <h5 className='title-desc'>Color:</h5>
                      <Color />
                    </div>
                    <div className='d-flex gap-15'>
                      <h5 className='title-desc'>Quantity:</h5>
                      <input
                        type='number'
                        style={{ width: "60px", height: "40px" }}
                        min={1}
                        max={10}
                        className='form-control'
                      />
                      <div className='button-product d-flex gap-15'>
                        <button className='button mt-0'>Add To Chart</button>
                        <button className='button signup mt-0'>
                          Buy It Now
                        </button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-30'>
                      <Link className='text-dark mb-3'>
                        <BiGitCompare /> Add To Compare
                      </Link>
                      <Link className='text-dark mb-3'>
                        <AiOutlineHeart /> Add To WishList
                      </Link>
                    </div>
                    <div
                      className='accordion accordion-flush'
                      id='accordionFlushExample'
                    >
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='flush-headingOne'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#flush-collapseOne'
                            aria-expanded='false'
                            aria-controls='flush-collapseOne'
                          >
                            <p className='mb-0'>
                              <LiaShippingFastSolid /> Shipping And Returns
                            </p>
                          </button>
                        </h2>
                        <div
                          id='flush-collapseOne'
                          className='accordion-collapse collapse'
                          aria-labelledby='flush-headingOne'
                          data-bs-parent='#accordionFlushExample'
                        >
                          <div className='accordion-body'>
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{" "}
                            <code>.accordion-flush</code> class. This is the
                            first item's accordion body.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-30 mt-3'>
                      <h5 className='title-desc mb-0'>Copy Product Link:</h5>
                      <Link
                        className='text-dark'
                        onClick={() => {
                          copyToClipboard(img.img);
                        }}
                      >
                        Link is here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='mb-4'>Description</h4>
              <div className='description-wrapper-body'>
                <p>
                  Bootstrap includes a wide range of shorthand responsive
                  margin, padding, and gap utility classes to modify an elements
                  appearance.Bootstrap includes a wide range of shorthand
                  responsive margin, padding, and gap utility classes to modify
                  an elements appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='mb-4'>Reviews</h4>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex align-items-end justify-content-between'>
                  <div className='mb-3'>
                    <h6>Customer Reviews</h6>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <p className='mb-0'>Based On 2 reviews</p>
                    </div>
                  </div>
                  {ordered && (
                    <div className='mb-3'>
                      <Link className='text-dark text-decoration-underline'>
                        write a review
                      </Link>
                    </div>
                  )}
                </div>
                <div className='review-form'>
                  <div>
                    <h4 className='mb-3'>Write A Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <p className='mb-1'>Name</p>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Enter Your name'
                        />
                      </div>
                      <div>
                        <p className='mb-1'>Email</p>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Email *'
                        />
                      </div>
                    </form>
                  </div>
                  <div className='mt-4'>
                    <p className='mb-0'>Rating</p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={false}
                      activeColor='#ffd700'
                    />
                  </div>
                  <div className='mt-3'>
                    <p className='mb-1'>Review Title</p>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Give Your Review A Title'
                    />
                  </div>
                  <div className='mt-3'>
                    <p className='mb-1'>Body of Review(150C)</p>
                    <textarea
                      name=''
                      className='w-100 form-control'
                      id=''
                      cols='30'
                      rows='4'
                      placeholder='Write Your Comments here'
                    ></textarea>
                    <div className='d-flex justify-content-end'>
                      <button className='button'>Submit Review</button>
                    </div>
                  </div>
                </div>
                <div className='reviews mt-4'>
                  <div className='review d-flex flex-column align-content-center'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <p>Gooood products Digitic</p>
                    <div className='d-flex'>
                      <p>Admin Aug 10, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
