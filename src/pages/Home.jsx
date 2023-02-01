import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
    {/* <!-- Start Swiper Section --> */}
      <div class="swiper landingSwiper position-relative">
          <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="slider-img animate-img">
                  <img src="Assets/Images/Slider/main-home-rev-1.jpg" alt=""/>
              </div>
              <div class="overlay"></div>
              <div class="slider__content d-flex justify-content-center align-items-center flex-column">
                  <h2>Take Your Breath</h2>
                  <div class="underline my-4">
                      <img src="Assets/Images/inner-img-1.png" alt=""/>
                  </div>
                  <div class="slider__paragraph animate-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                  </div>
              </div>
          </div>
          <div class="swiper-slide">
              <div class="slider-img animate-img">
                  <img src="Assets/Images/Slider/main-home-rev-2.jpg" alt=""/>
              </div>
              <div class="overlay"></div>
              <div class="slider__content d-flex justify-content-center align-items-center flex-column">
                  <h2>Get Ready To</h2>
                  <div class="underline my-4">
                      <img src="Assets/Images/inner-img-1.png" alt=""/>
                  </div>
                  <div class="slider__paragraph animate-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                  </div>
              </div>
          </div>
          <div class="swiper-slide">
              <div class="slider-img animate-img">
                  <img src="Assets/Images/Slider/main-home-rev-3.jpg" alt=""/>
              </div>
              <div class="overlay"></div>
              <div class="slider__content d-flex justify-content-center align-items-center flex-column">
                  <h2>The Another Dimensions</h2>
                  <div class="underline my-4">
                      <img src="Assets/Images/inner-img-1.png" alt=""/>
                  </div>
                  <div class="slider__paragraph animate-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                  </div>
              </div>
          </div>

          </div>
          <div class="swiper-button-next btn-swipe d-lg-block d-none"><div></div></div>
          <div class="swiper-button-prev btn-swipe d-lg-block d-none"><div></div></div>
          <div class="swiper-pagination d-lg-block d-none"></div>
      </div>
    {/* <!-- End Swiper Section --> */}

    {/* <!-- Start Intro-Web Section --> */}
    <section class="intro">
        <div class="custom-container">
            <div class="intro__contents text-center text-light">
                <h4>Welcome To The Another Dimensions</h4>
                <h2>One of the best 'Souls-like' launcher games</h2>
                <div class="inner-line mb-3">
                    <img src="Assets/Images/inner-img-1.png" alt=""/>
                </div>
                <p>There is in the land of Mnar a vast still lake that is fed by no stream and out of which no stream flows. Ten thousand years ago there stood by its shore the mighty city of Sarnath, but Sarnath stands there no more.</p>
                <a href="Assets/Images/download-img.jpg" download="" class="primary-btn">
                    Download Launcher
                </a>
            </div>
        </div>
    </section>
    {/* <!-- End Intro-Web Section --> */}
    
    {/* <!-- Start Video Section --> */}
    <section class="video bx-shadow">
        <video loop="" muted="" autoplay="" class="video-iframe" width="100%">
            <source type="video/mp4" src="./Assets/Images/XiaoYing_Video_1663854199515.mp4"/>
        </video>
    </section>
    {/* <!-- End Video Section --> */}

    {/* <!-- End Video Section --> */}
    <section className="games">
      <section className="pre-order">
        <div className="pre-order__contents py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image"></div>
              </div>
              <div className="col-lg-6 d-flex text-lg-start text-sm-center pre-order__descr justify-content-center align-items-center">
                <div className="pre-order__desc">
                  <h2 className="main-title text-sm-center text-lg-start">
                    Pre-Order Now!!
                  </h2>
                  <p className="my-5">
                    Elden Ring is a 2022 action role-playing game developed by
                    FromSoftware and published by Bandai Namco Entertainment.
                    It was directed by Hidetaka Miyazaki with worldbuilding
                    provided by the fantasy writer George R. R. Martin. The
                    game was released for PlayStation 4, PlayStation 5,
                    Windows, Xbox One, and Xbox Series X/S on February 25. In
                    Elden Ring, players control a customizable player
                    character on a journey to repair the Elden Ring and become
                    the new Elden Lord. The game is presented through a
                    third-person perspective, with players freely roaming its
                    interactive open world. Gameplay elements include combat
                    using several types of weapons and magic spells, horseback
                    riding, and crafting.
                  </p>
                  <a href="Shop.html" className="primary-btn pre-order__btn">
                    Pre-Order Now!!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending position-relative bx-shadow">
        <div className="trending__contents py-5">
          <div className="container">
            <div className="trending__content">
              <h2 className="main-text">Trending Games</h2>
              <div className="slider-trending">
                <div className="swiper trending">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide trendingSwiper">
                      <div className="trending-card">
                        <div className="image"></div>
                        <div className="trending-card__desc text-center">
                          <a href="#">
                            <h2>Elden Ring</h2>
                          </a>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide trendingSwiper">
                      <div className="trending-card">
                        <div className="image"></div>
                        <div className="trending-card__desc text-center">
                          <a href="#">
                            <h2>Elden Ring</h2>
                          </a>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide trendingSwiper">
                      <div className="trending-card">
                        <div className="image"></div>
                        <div className="trending-card__desc text-center">
                          <a href="#">
                            <h2>Elden Ring</h2>
                          </a>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide trendingSwiper">
                      <div className="trending-card">
                        <div className="image"></div>
                        <div className="trending-card__desc text-center">
                          <a href="#">
                            <h2>Elden Ring</h2>
                          </a>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide trendingSwiper">
                      <div className="trending-card">
                        <div className="image"></div>
                        <div className="trending-card__desc text-center">
                          <a href="#">
                            <h2>Elden Ring</h2>
                          </a>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* <!-- End Video Section --> */}

    {/* <!-- Start Coming-Soon Section --> */}
    <section class="coming-soon position-relative">
        <div class="coning-soon__contents h-100 d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="coning-soon__content">
                    <h2 class="main-text">Coming Out In</h2>
                    <div class="image-break">
                        <img src="Assets/Images/inner-img-1.png" alt=""/>
                    </div>
                    <div class="count-down">
                        <div class="row text-center fs-1 fw-bold justify-content-center">
                            <div class="col-md-3 pt-5 col-5">
                                <div class="days">00</div>
                                <span>Days</span>
                            </div>
                            <div class="col-md-3 pt-5 col-5">
                                <div class="hours">00</div>
                                <span>Hours</span>
                            </div>
                            <div class="col-md-3 pt-5 col-5">
                                <div class="minutes">00</div>
                                <span>Minutes</span>
                            </div>
                            <div class="col-md-3 pt-5 col-5">
                                <div class="seconds">00</div>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Coming-Soon Section --> */}

    {/* <!-- Start NewsLetter Section --> */}
    <section class="newsletter">
        <div class="news__contents">
            <div class="container h-100">
                <div class="news__content d-flex justify-content-center align-items-center flex-column h-100">
                    <h5>Subscribe To Our Newsletter</h5>
                    <h2 class="main-text">AND KEEP UP TO DATE</h2>
                    <div class="image">
                        <img src="Assets/Images/inner-img-1.png" alt=""/>
                    </div>
                    <div class="email-input">
                        <input type="email" class="custom--input" name="" id="" placeholder="Your Email"/>
                        <button class="primary-btn--non-bg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End NewsLetter Section --> */}
    
      <Footer/>
    </>
  );
}
