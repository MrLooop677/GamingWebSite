export function Navbar() {
    return (
        <nav id="nav" className="navbar navbar-expand-lg nav-bar ">
        <div className="nav-phone fixed-nav d-flex d-lg-none  align-items-center">
            <button className="btn btn--icon mt-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            </button>
            <a className="navbar-brand nav--custom-logo text-light text-center pe-3" href="index.html">
            </a>
            <div className="offcanvas body--custom bx-shadow offcanvas-start canvas--edit" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-endtext-center">
                        <li className="nav-item">
                        <a className="nav-link active__nav" aria-current="page" href="index.html"><span>Home</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="About-Us.html"><span>About Us</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="Shop.html"><span>Shop</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="Blog.html"><span>Blog</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="Community.html"><span>Community</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="Contact-Us.html"><span>Contact Us</span></a>
                        </li>
            
                    </ul>
                </div>
            </div>
        </div>

        <div className="container d-lg-block position-relative">
        <a className="navbar-brand nav--custom-logo text-light d-lg-block d-none" href="index.html">
        </a>
        <div className="collapse navbar-collapse navbar__links--bg" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end text-light text-center">
            <li className="nav-item">
            <a className="nav-link active__nav" aria-current="page" href="index.html"><span>Home</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="About-Us.html"><span>About Us</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="Shop.html"><span>Shop</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="Blog.html"><span>Blog</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="Community.html"><span>Community</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="Contact-Us.html"><span>Contact Us</span></a>
            </li>

        </ul>
        </div>
        </div>
    </nav>
    )
}