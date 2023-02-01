export function Footer() {
    return (
        <>
                <footer className="footer">
        <div className="footer__contents">
        <div className="footer__container py-5">
                <div className="footer__content">
                    <div className="row">
                        <div className="col-lg-3 mt--custom">
                            <div className="footer__logo">
                                <a href="index.html">
                                    <img src="Assets/Images/foooter-logo.png" alt=""/>
                                </a>
                            </div>
                            <div className="footer__desc">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eos atque maxime.</p>
                            </div>
                            <div className="footer__search">
                                <input type="search" placeholder="Search"/>
                                <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 mt--custom">
                            <h4>LATEST NEWS</h4>
                            <div className="news__content d-flex">
                                <div className="image">
                                    <img src="Assets/Images/blog-post-img-2-150x150.jpg" alt=""/>
                                </div>
                                <div className="news-desc">
                                    <h4>Black Angel</h4>
                                    <p>June 7,2017</p>
                                </div>
                            </div>
                            <div className="news__content d-flex">
                                <div className="image">
                                    <img src="Assets/Images/blog-post-img-2-150x150.jpg" alt=""/>
                                </div>
                                <div className="news-desc">
                                    <h4>Black Angel</h4>
                                    <p>June 7,2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt--custom">
                            <div className="art-work row">
                                <h3>Art Works</h3>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer.jpg" alt="" srcSet=""/>
                                </div>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer2.jpg" alt="" srcSet=""/>
                                </div>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer3.jpg" alt="" srcSet=""/>
                                </div>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer4.jpg" alt="" srcSet=""/>
                                </div>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer5.jpg" alt="" srcSet=""/>
                                </div>
                                <div className="col-4">
                                    <img src="Assets/Images/Art Footer/art-footer6.jpg" alt="" srcSet=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt--custom">
                            <div className="news-letter">
                                <h3>News Letter</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, odio.</p>
                                <input type="text" placeholder="Subscripe"/>
                                <a href="#"><i className="fa-regular fa-message"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second__footer pt-3">
            <div className="footer__container">
                <div className="row">
                    <div className="col-lg-6">
                        <p>© <span className="dateTime text-white"></span> AhmedAbdElNasser, All Rights Reserved</p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="icons-social d-flex justify-content-end">
                            <li className="icon-social">
                                <a href="https://www.facebook.com/AhmedNasser42/" target="_blank">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="icon-social">
                                <a href="#">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                            <li className="icon-social">
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li className="icon-social">
                                <a href="#">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="icon-social">
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}