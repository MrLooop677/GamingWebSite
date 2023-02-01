import React from "react";
import { Footer } from "../components/Footer";

const ContactUs = () => {
  return (
    <>
          {/* <!-- Start Contact-Us --> */}
    <main class="contact-us">
        <div class="intro-image d-flex justify-content-center align-items-center text-light">
            <h2 class="main-title">Contact Us</h2>
        </div>

        <div class="form-cover d-flex">
            <div class="custom-container">
            <form class="row g-3 contactUs mb-5">
                    <div class="intro-form text-light text-center my-5">
                        <h2 class="main-text">Feel Free To Say Any Thing</h2>
                        <img src="Assets/Images/inner-img-1.png" alt=""/>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control input-val input--custom" id="validationDefault01" required placeholder="YOUR NAME"/>
                    </div>
                    <div class="col-md-6">
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control input-val input--custom" id="validationDefault02" required placeholder=" EMAIL"/>
                    </div>
                    <div class="col-md-12">
                        <textarea name="" cols="30" rows="10" id="validationDefault03" class="w-100 input-val input--custom"></textarea>
                    </div>
                    <div class="col-12">
                        <a class="btn btn-warning btn__mail input--custom" type="submit">SUBMIT</a>
                    </div>
                </form>
            </div>
        </div>

    </main>
    {/* <!-- End Contact-Us --> */}

    <Footer/>
    </>
  )
};

export default ContactUs;
