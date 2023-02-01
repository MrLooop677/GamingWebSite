import React, { useState } from "react";

const Blog = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const createPost = () => {
    console.log({ category, name, title, post, post });
  };
  return (
    <>
      {/* <!-- Start Blog Page --> */}
      <section className="blog position-relative">
        <div className="blog__contents">
          <div className="blog__intro d-flex justify-content-center align-items-center">
            <h2>Blog</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="blog__content">
                  <div className="container">
                    <ul className="posts">
                      <div className="blog__post my-5">
                        <div className="post__image">
                          <img
                            className="zoomable"
                            src="Assets/Images/blog/blog-post-img-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="post__desc">
                          <div className="post__info">
                            <h5 className="post__category my-3">Epic</h5>
                            <h2 className="post__title my-3">
                              <a href="#">Lorem ipsum dolor sit amet.</a>
                            </h2>
                            <p className="post__para">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Suscipit recusandae ratione quos
                              alias mollitia! Autem ea eos laudantium, molestiae
                              ex quae dolorum dolores. Dolore consectetur
                              praesentium, repellat earum quibusdam accusamus
                              nemo autem aut excepturi reprehenderit.
                            </p>
                          </div>
                          <div className="post__comment d-flex align-items-center">
                            <div className="post__user-image me-3">
                              <img
                                src="Assets/Images/blog/aced9dc97780ca621adc476fe544bf9a.jpg"
                                alt=""
                              />
                            </div>
                            <div className="post__user-name d-flex align-items-center">
                              <h5>by admin</h5>
                              <span className="mx-2">/</span>
                              <h5>June 7, 2017</h5>
                              <div className="post-icon mx-4">
                                <a href="#">
                                  <i className="fa-solid fa-message"></i>
                                </a>
                                <span>0</span>
                              </div>
                              <div className="post__share">
                                <a href="Comment.html">
                                  <i className="fa-solid fa-share-from-square"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="blog__left-side-bar mt-4">
                  <div className="side-bar__post-btn">
                    <button
                      type="button"
                      className="btn btn--post primary-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      New Post
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content model--custom">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLabel text-center"
                            >
                              Share Your Post
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3 inpCat">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Category:{" "}
                                </label>
                                <input
                                  placeholder="Type Category"
                                  type="text"
                                  className="input--custom form-control"
                                  id="recipient-name"
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                />
                              </div>
                              <div className="mb-3 inpTitle">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Title:{" "}
                                </label>
                                <input
                                  placeholder="Type Title"
                                  type="text"
                                  className="input--custom form-control"
                                  id="recipient-name"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>
                              <div className="mb-3 inpPost">
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  Post:
                                </label>
                                <textarea
                                  placeholder="Type Your Words "
                                  className="input--custom form-control area--custom"
                                  id="message-text"
                                  value={post}
                                  onChange={(e) => setPost(e.target.value)}
                                ></textarea>
                              </div>
                              <div className="mb-3 inpUser">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Name:{" "}
                                </label>
                                <input
                                  placeholder="Type Your Name"
                                  type="text"
                                  className="input--custom form-control"
                                  id="recipient-name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary custom-btn-close primary-btn--non-bg "
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn primary-btn--non-bg  btn-primary send__post custom-post-btn"
                              onClick={createPost}
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side-bar__search">
                    <h2>Blog Search</h2>
                    <div className="input-search">
                      <input type="search" placeholder="Search" name="" id="" />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                  <div className="side-bar__article mt-5">
                    <h2>Top Article</h2>
                    <a href="#">
                      <div className="news__content d-flex">
                        <div className="image">
                          <img
                            src="Assets/Images/blog-post-img-2-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-desc">
                          <h4>Black Angel</h4>
                          <p>June 7,2017</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="news__content d-flex">
                        <div className="image">
                          <img
                            src="Assets/Images/blog-post-img-2-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-desc">
                          <h4>Black Angel</h4>
                          <p>June 7,2017</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="news__content d-flex">
                        <div className="image">
                          <img
                            src="Assets/Images/blog-post-img-2-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="news-desc">
                          <h4>Black Angel</h4>
                          <p>June 7,2017</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="side-bar__archive mt-5">
                    <h2>Archives</h2>
                    <h5>
                      <a href="#">June 2017</a>
                    </h5>
                    <div className="blog__bannar mt-5">
                      <img
                        src="Assets/Images/blog/blog-sidearea-banner.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="side-bar__twitter mt-5">
                    <h2>Twitter Feed</h2>
                    <p>
                      <i className="fa-brands fa-twitter"></i>{" "}
                      <a href="#">@AhmedAbdElNasser </a> Hey, please DM us so we
                      can provide more details. Thanks!
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
      </section>
      {/* <!-- End Blog Page --> */}
    </>
  );
};

export default Blog;
