import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left header-dropdowns">
            <div className="header-dropdown">
              <a href="#">USD</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">EUR</a>
                  </li>
                  <li>
                    <a href="#">USD</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-dropdown">
              <a href="#">ENGLISH</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">ENGLISH</a>
                  </li>
                  <li>
                    <a href="#">FRENCH</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-right">
            <p className="welcome-msg">Default welcome msg! </p>

            <div className="header-dropdown dropdown-expanded">
              <a href="#">Links</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <Link to="/myaccountpage">MY ACCOUNT </Link>
                  </li>
                  <li>
                    <a href="#">DAILY DEAL</a>
                  </li>
                  <li>
                    <a href="#">MY WISHLIST </a>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <a to="#" className="login-link">
                      LOG IN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler" type="button">
              <i className="icon-menu"></i>
            </button>
            <Link to="/" className="logo">
              <img src="assets/images/logo.png" alt="Porto Logo" />
            </Link>
          </div>

          <div className="header-center">
            <div className="header-search">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-magnifier"></i>
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="I'm searching for..."
                    required
                  />
                  <div className="select-custom">
                    <select id="cat" name="cat">
                      <option value="">All Categories</option>
                      <option value="4">Fashion</option>
                      <option value="12">- Women</option>
                      <option value="13">- Men</option>
                      <option value="66">- Jewellery</option>
                      <option value="67">- Kids Fashion</option>
                      <option value="5">Electronics</option>
                      <option value="21">- Smart TVs</option>
                      <option value="22">- Cameras</option>
                      <option value="63">- Games</option>
                      <option value="7">Home &amp; Garden</option>
                      <option value="11">Motors</option>
                      <option value="31">- Cars and Trucks</option>
                      <option value="32">
                        - Motorcycles &amp; Powersports
                      </option>
                      <option value="33">- Parts &amp; Accessories</option>
                      <option value="34">- Boats</option>
                      <option value="57">- Auto Tools &amp; Supplies</option>
                    </select>
                  </div>
                  <button className="btn" type="submit">
                    <i className="icon-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="header-right">
            <a href="#" className="porto-icon">
              <i className="icon icon-heart"></i>
            </a>

            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="minicart-icon"></i>
                <span className="cart-count">2</span>
              </a>

              <div className="dropdown-menu">
                <div className="dropdownmenu-wrapper">
                  <div className="dropdown-cart-header">
                    <span>2 Items</span>

                    <a href="cart.html">View Cart</a>
                  </div>
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="product.html">Woman Ring</a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $99.00
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-1.jpg"
                            alt="product"
                          />
                        </a>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-retweet"></i>
                        </a>
                      </figure>
                    </div>

                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="product.html">Woman Necklace</a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $35.00
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-2.jpg"
                            alt="product"
                          />
                        </a>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-retweet"></i>
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="dropdown-cart-total">
                    <span>Total</span>

                    <span className="cart-total-price">$134.00</span>
                  </div>

                  <div className="dropdown-cart-action">
                    <Link to="/checkoutshipping1" className="btn btn-block">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom sticky-header">
        <div className="container">
          <nav className="main-nav">
            <ul className="menu sf-arrows">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
            
              <li className="megamenu-container">
                <Link to="/productmenu" className="sf-with-ul">
                  Products
                </Link>
                <div className="megamenu">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="menu-title">
                            <a href="#">Variations</a>
                          </div>
                          <ul>
                            <li>
                              <a href="product.html">Horizontal Thumbnails</a>
                            </li>
                            <li>
                              <a href="product-full-width.html">
                                Vertical Thumbnails
                                <span className="tip tip-hot">Hot!</span>
                              </a>
                            </li>
                            <li>
                              <a href="product.html">Inner Zoom</a>
                            </li>
                            <li>
                              <a href="product-addcart-sticky.html">
                                Addtocart Sticky
                              </a>
                            </li>
                            <li>
                              <a href="product-sidebar-left.html">
                                Accordion Tabs
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-title">
                            <a href="#">Variations</a>
                          </div>
                          <ul>
                            <li>
                              <a href="product-sticky-tab.html">Sticky Tabs</a>
                            </li>
                            <li>
                              <a href="product-simple.html">Simple Product</a>
                            </li>
                            <li>
                              <a href="product-sidebar-left.html">
                                With Left Sidebar
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div className="menu-title">
                            <a href="#">Product Layout Types</a>
                          </div>
                          <ul>
                            <li>
                              <a href="product.html">Default Layout</a>
                            </li>
                            <li>
                              <a href="product-extended-layout.html">
                                Extended Layout
                              </a>
                            </li>
                            <li>
                              <a href="product-full-width.html">
                                Full Width Layout
                              </a>
                            </li>
                            <li>
                              <a href="product-grid-layout.html">
                                Grid Images Layout
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky-both.html">
                                Sticky Both Side Info
                                <span className="tip tip-hot">Hot!</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky-info.html">
                                Sticky Right Side Info
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="banner">
                        <a href="#">
                          <img
                            src="assets/images/menu-banner.jpg"
                            alt="Menu banner"
                            className="product-promo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="sf-with-ul">
                  Pages
                </a>

                <ul>
                  <li>
                    <Link to="/shopingcart">Shopping Cart</Link>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                    <ul>
                      <li>
                        <Link to="/checkoutshipping1">Checkout Shipping</Link>
                      </li>
                      <li>
                        <Link to="/checkoutshipping2">Checkout Shipping 2</Link>
                      </li>
                      <li>
                        <Link to="/checkoutreview">Checkout Review</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                    <ul>
                      <li>
                        <Link to="/Dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/myaccountpage">My Account</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <a to="blog.html">Blog</a>
                    <ul>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blogpost">Blog Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <a href="#" className="login-link">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="sf-with-ul">
                  Features
                </a>
                <ul>
                  <li>
                    <a href="#">Header Types</a>
                  </li>
                  <li>
                    <a href="#">Footer Types</a>
                  </li>
                </ul>
              </li>
              <li className="float-right buy-effect">
                <a href="https://1.envato.market/DdLk5" target="_blank">
                  <span>buy Porto</span>
                </a>
              </li>
              <li className="float-right special-effect">
                <a href="#">Special Offer</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
