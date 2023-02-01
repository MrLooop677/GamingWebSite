import React from "react";
import { Footer } from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      {/* <!-- Start Contact-Us --> */}
      <main className="contact-us">
        <div className="intro-image d-flex justify-content-center align-items-center text-light">
          <h2 className="main-title">Contact Us</h2>
        </div>

        <div className="form-cover d-flex">
          <div className="custom-container">
            <form className="row g-3 contactUs mb-5">
              <div className="intro-form text-light text-center my-5">
                <h2 className="main-text">Feel Free To Say Any Thing</h2>
                <img src="Assets/Images/inner-img-1.png" alt="" />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control input-val input--custom"
                  id="validationDefault01"
                  required
                  placeholder="YOUR NAME"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  className="form-control input-val input--custom"
                  id="validationDefault02"
                  required
                  placeholder=" EMAIL"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  id="validationDefault03"
                  className="w-100 input-val input--custom"
                ></textarea>
              </div>
              <div className="col-12">
                <a
                  className="btn btn-warning btn__mail input--custom"
                  type="submit"
                >
                  SUBMIT
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* <!-- End Contact-Us --> */}

      <Footer />
    </>
  );
};

export default ContactUs;
