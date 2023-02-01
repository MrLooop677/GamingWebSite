import React from "react";
import { Footer } from "../components/Footer";

export default function About() {
  return(
      <>
            {/* <!-- Start About Us Page --> */}
    <section class="about-us mt-5 pt-5">
        <div class="about-us__contents">
            {/* <!-- Intro Section --> */}
            <div class="container">
                <div class="row about-us__content">
                    <div class="col-lg-6 about-us__identity d-flex flex-column justify-content-center ps-5">
                        <h2>Join Our Community</h2>
                        <p>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                        <a href="#" class="d-flex arrow-link align-items-center ">Visit the community <i class="fa-solid fa-arrow-right ms-2 mt-1"></i></a>
                    </div>
                    <div class="col-lg-6 about-us__page">
                        <img src="Assets/Images/about-us.png" alt=""/>
                    </div>
                </div>
                <div class="row about-us__content">
                    <div class="col-lg-6 about-us__identity d-flex flex-column justify-content-center order-lg-2 ps-5">
                        <h2>Experience Dimensions Hardware</h2>
                        <p>We created the Dimensions Controller and the VR technologies that power the Controller to making gaming on the PC even better.</p>
                        <a href="#" class="d-flex arrow-link align-items-center ">Experience Dimensions Hardware <i class="fa-solid fa-arrow-right ms-2 mt-1"></i></a>
                    </div>
                    <div class="col-lg-6 about-us__page">
                        <img src="Assets/Images/aboutt-us.png" alt=""/>
                    </div>
                </div>
            </div>
            {/* <!-- Intro Section --> */}

            {/* <!-- Features --> */}
            <section class="about-us__features mt-5">
                <div class="container">
                    <div class="features__desc d-flex flex-column align-items-center mb-5 pb-3">
                        <h2 class="main-title">Our Features</h2>
                        <p class="text-center w-91">We are constantly working to bring new updates and features to Steam, such as:</p>
                    </div>
                    <div class="row about-us__features mt-lg-5">
                        <div class="features__card col-lg-4 d-flex flex-column align-items-center text-center mt-5">
                            <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
                                <h4 class="my-3">Our Chat App</h4>
                                <p>Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-people-group"></i></div>
                                <h4 class="my-3">Game Hubs</h4>
                                <p>Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-radio"></i></div>
                                <h4 class="my-3">Our Broadcast</h4>
                                <p>Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row about-us__features mt-lg-5">
                        <div class="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-share-nodes"></i></div>
                                <h4 class="my-3">Our Workshop</h4>
                                <p>Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-mobile-screen"></i></div>
                                <h4 class="my-3">Available on Mobile</h4>
                                <p>Access Steam anywhere from your iOS or Android device with the Steam mobile app.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                                <div class="card__desc">
                                <div class="icon"><i class="fa-solid fa-clock"></i></div>
                                <h4 class="my-3">Early Access to Games</h4>
                                <p>Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.</p>
                                <a href="#" class="link-more">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Features --> */}

            {/* <!-- Slider --> */}
            <section class="slider-sec py-5">
                <div class="container">
                    <div class="title mb-5 pt-3">
                        <h2 class="main-title">Our Partner</h2>
                    </div>
                    <div class="owl-carousel about-us__slider">
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo-toysforbob.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_atvi-shanghai-studio.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_beenox.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_demonware.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_highmoon-studios.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_infinityward.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_raven.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_sledgehammer.png" alt=""/> 
                        </div>
                        <div class="slider__image"> <img src="Assets/Images/Partners/logo_treyarch.png" alt=""/> 
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Slider --> */}
        </div>
    </section>
    {/* <!-- End About Us Page --> */}
    <Footer/>
      </>
    ) 
};
