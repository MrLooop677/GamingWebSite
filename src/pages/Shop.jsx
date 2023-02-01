import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../RTK/productSlice";
import { addToCart } from "../RTK/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filterProductPrice = async (min, max) => {
    let data = await axios.get(
      `http://localhost:3009/products?_price=${min}&_price=${max}`
    );
    console.log(data.data);
  };

  const card = products.map((product) => (
    <div className="col-lg-4 mb-3 mt-4" key={product.id}>
      <div className="shop-card" id="price_30">
        <div className="shop-card__image position-relative">
          <img src={product.mainImg} alt="" />
          <div className="add-cart">
            <button
              className="add-to-cart primary-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          </div>
          <div className="overlay shop-overlay"></div>
        </div>
        <div className="shop-card__desc">
          <div className="row align-items-center mt-3">
            <div className="col-6">
              <div className="card__name">
                <h3>
                  <a href="#">{product.name}</a>
                </h3>
              </div>
            </div>
            <div className="col-6">
              <div className="card__price text-end">
                <h5>${product.price}</h5>
              </div>
            </div>
            <div className="col-12">
              <span className="card__type">game / {product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {/* <!-- Start Shop Pgae --> */}
      <section className="shop mt-5 pt-5">
        <div className="shop__contents">
          <div className="container">
            <div className="shop__content">
              <div className="shop__slider">
                <div className="swiper shopSlider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider2.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider3.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider4.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider5.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination shopPagi"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg 9">
                  <div className="shop__contents__cards">
                    <div className="row mt-5">{card}</div>
                  </div>
                </div>

                <div className="col-lg-3 mt-5">
                  <div className="blog__left-side-bar mt-3">
                    <div className="side-bar__search">
                      <h2>Shop Search</h2>
                      <div className="input-search">
                        <input
                          type="search"
                          placeholder="Search"
                          name=""
                          id=""
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </div>
                    <div className="side-bar__article filter-price mt-5">
                      <h2>Fliter Price</h2>
                      <div className="filter">
                        <input
                          id="All"
                          type="radio"
                          className="price"
                          label=""
                          name="price"
                        />
                        <label htmlFor="All">All</label>
                      </div>
                      <div className="filter">
                        <input
                          id="30"
                          type="radio"
                          className="price"
                          label=""
                          name="price"
                        />
                        <label htmlFor="30">from 30 -50</label>
                      </div>
                      <div className="filter">
                        <input
                          id="60"
                          type="radio"
                          className="price"
                          name="price"
                        />
                        <label htmlFor="60">from 60 -80</label>
                      </div>
                      <div className="filter">
                        <input
                          id="90"
                          type="radio"
                          className="price"
                          name="price"
                        />
                        <label
                          htmlFor="90"
                          onClick={(e) => filterProductPrice(40, 70)}
                        >
                          from 90 -100
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="110"
                          type="radio"
                          className="price"
                          name="price"
                        />
                        <label htmlFor="110">from 110 -130</label>
                      </div>
                      <div className="filter">
                        <input
                          id="150"
                          type="radio"
                          className="price"
                          name="price"
                        />
                        <label htmlFor="150">more than 150</label>
                      </div>
                    </div>
                    <div className="side-bar__twitter mt-5">
                      <h2>Twitter Feed</h2>
                      <p>
                        <i className="fa-brands fa-twitter"></i>{" "}
                        <a href="#">@AhmedAbdElNasser </a> Hey, please DM us so
                        we can provide more details. Thanks!
                      </p>
                    </div>
                    <div className="side-bar__categories my-5">
                      <h2>Categories</h2>
                      <h4>
                        <a href="#">Epic</a>
                      </h4>
                      <h4>
                        <a href="#">Playing</a>
                      </h4>
                      <h4>
                        <a href="#">Uncategorized</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop Pgae --> */}

      <Footer />
    </>
  );
};

export default Shop;
