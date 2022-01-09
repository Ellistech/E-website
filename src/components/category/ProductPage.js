import react from "react";

export default function ProductPage() {
  return (
    <react.Fragment>
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Electronics</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Headsets
            </li>
          </ol>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="product-single-container product-single-default">
              <div class="row">
                <div class="col-lg-7 col-md-6 product-single-gallery">
                  <div class="product-slider-container product-item">
                    <div class="product-single-carousel owl-carousel owl-theme">
                      <div class="product-item">
                        <img
                          class="product-single-image"
                          src="assets/images/products/zoom/product-1.jpg"
                          data-zoom-image="assets/images/products/zoom/product-1-big.jpg"
                        />
                      </div>
                      <div class="product-item">
                        <img
                          class="product-single-image"
                          src="assets/images/products/zoom/product-2.jpg"
                          data-zoom-image="assets/images/products/zoom/product-2-big.jpg"
                        />
                      </div>
                      <div class="product-item">
                        <img
                          class="product-single-image"
                          src="assets/images/products/zoom/product-3.jpg"
                          data-zoom-image="assets/images/products/zoom/product-3-big.jpg"
                        />
                      </div>
                      <div class="product-item">
                        <img
                          class="product-single-image"
                          src="assets/images/products/zoom/product-4.jpg"
                          data-zoom-image="assets/images/products/zoom/product-4-big.jpg"
                        />
                      </div>
                    </div>
                    <span class="prod-full-screen">
                      <i class="icon-plus"></i>
                    </span>
                  </div>
                  <div
                    class="prod-thumbnail row owl-dots"
                    id="carousel-custom-dots"
                  >
                    <div class="col-3 owl-dot">
                      <img src="assets/images/products/zoom/product-1.jpg" />
                    </div>
                    <div class="col-3 owl-dot">
                      <img src="assets/images/products/zoom/product-2.jpg" />
                    </div>
                    <div class="col-3 owl-dot">
                      <img src="assets/images/products/zoom/product-3.jpg" />
                    </div>
                    <div class="col-3 owl-dot">
                      <img src="assets/images/products/zoom/product-4.jpg" />
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 col-md-6">
                  <div class="product-single-details">
                    <h1 class="product-title">Silver Porto Headset</h1>

                    <div class="ratings-container">
                      <div class="product-ratings">
                        <span class="ratings" style={{ width: "60%" }}></span>
                      </div>

                      <a href="#" class="rating-link">
                        ( 6 Reviews )
                      </a>
                    </div>

                    <div class="price-box">
                      <span class="old-price">$81.00</span>
                      <span class="product-price">$101.00</span>
                    </div>

                    <div class="product-desc">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non.
                      </p>
                    </div>

                    <div class="product-filters-container">
                      <div class="product-single-filter">
                        <label>Colors:</label>
                        <ul class="config-swatch-list">
                          <li class="active">
                            <a
                              href="#"
                              style={{ backgroundColor: "#6085a5" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              style={{ backgroundColor: "#ab6e6e" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              style={{ backgroundColor: "#b19970" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              style={{ backgroundColor: "#11426b" }}
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="product-action product-all-icons">
                      <div class="product-single-qty">
                        <input
                          class="horizontal-quantity form-control"
                          type="text"
                        />
                      </div>

                      <a
                        href="cart.html"
                        class="paction add-cart"
                        title="Add to Cart"
                      >
                        <span>Add to Cart</span>
                      </a>
                      <a
                        href="#"
                        class="paction add-wishlist"
                        title="Add to Wishlist"
                      >
                        <span>Add to Wishlist</span>
                      </a>
                      <a
                        href="#"
                        class="paction add-compare"
                        title="Add to Compare"
                      >
                        <span>Add to Compare</span>
                      </a>
                    </div>

                    <div class="product-single-share">
                      <label>Share:</label>

                      <div class="addthis_inline_share_toolbox"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-single-tabs">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="product-tab-desc"
                    data-toggle="tab"
                    href="#product-desc-content"
                    role="tab"
                    aria-controls="product-desc-content"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="product-tab-tags"
                    data-toggle="tab"
                    href="#product-tags-content"
                    role="tab"
                    aria-controls="product-tags-content"
                    aria-selected="false"
                  >
                    Tags
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="product-tab-reviews"
                    data-toggle="tab"
                    href="#product-reviews-content"
                    role="tab"
                    aria-controls="product-reviews-content"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="product-desc-content"
                  role="tabpanel"
                  aria-labelledby="product-tab-desc"
                >
                  <div class="product-desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat.
                    </p>
                    <ul>
                      <li>
                        <i class="icon-ok"></i>Any Product types that You want -
                        Simple, Configurable
                      </li>
                      <li>
                        <i class="icon-ok"></i>Downloadable/Digital Products,
                        Virtual Products
                      </li>
                      <li>
                        <i class="icon-ok"></i>Inventory Management with
                        Backordered items
                      </li>
                    </ul>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, <br />
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="product-tags-content"
                  role="tabpanel"
                  aria-labelledby="product-tab-tags"
                >
                  <div class="product-tags-content">
                    <form action="#">
                      <h4>Add Your Tags:</h4>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          required
                        />
                        <input
                          type="submit"
                          class="btn btn-primary"
                          value="Add Tags"
                        />
                      </div>
                    </form>
                    <p class="note">
                      Use spaces to separate tags. Use single quotes (') for
                      phrases.
                    </p>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="product-reviews-content"
                  role="tabpanel"
                  aria-labelledby="product-tab-reviews"
                >
                  <div class="product-reviews-content">
                    <div class="collateral-box">
                      <ul>
                        <li>Be the first to review this product</li>
                      </ul>
                    </div>

                    <div class="add-product-review">
                      <h3 class="text-uppercase heading-text-color font-weight-semibold">
                        WRITE YOUR OWN REVIEW
                      </h3>
                      <p>How do you rate this product? *</p>

                      <form action="#">
                        <table class="ratings-table">
                          <thead>
                            <tr>
                              <th>&nbsp;</th>
                              <th>1 star</th>
                              <th>2 stars</th>
                              <th>3 stars</th>
                              <th>4 stars</th>
                              <th>5 stars</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Quality</td>
                              <td>
                                <input
                                  type="radio"
                                  name="ratings[1]"
                                  id="Quality_1"
                                  value="1"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="ratings[1]"
                                  id="Quality_2"
                                  value="2"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="ratings[1]"
                                  id="Quality_3"
                                  value="3"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="ratings[1]"
                                  id="Quality_4"
                                  value="4"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="ratings[1]"
                                  id="Quality_5"
                                  value="5"
                                  class="radio"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Value</td>
                              <td>
                                <input
                                  type="radio"
                                  name="value[1]"
                                  id="Value_1"
                                  value="1"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="value[1]"
                                  id="Value_2"
                                  value="2"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="value[1]"
                                  id="Value_3"
                                  value="3"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="value[1]"
                                  id="Value_4"
                                  value="4"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="value[1]"
                                  id="Value_5"
                                  value="5"
                                  class="radio"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Price</td>
                              <td>
                                <input
                                  type="radio"
                                  name="price[1]"
                                  id="Price_1"
                                  value="1"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="price[1]"
                                  id="Price_2"
                                  value="2"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="price[1]"
                                  id="Price_3"
                                  value="3"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="price[1]"
                                  id="Price_4"
                                  value="4"
                                  class="radio"
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="price[1]"
                                  id="Price_5"
                                  value="5"
                                  class="radio"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div class="form-group">
                          <label>
                            Nickname <span class="required">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>
                            Summary of Your Review{" "}
                            <span class="required">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            required
                          />
                        </div>
                        <div class="form-group mb-2">
                          <label>
                            Review <span class="required">*</span>
                          </label>
                          <textarea
                            cols="5"
                            rows="6"
                            class="form-control form-control-sm"
                          ></textarea>
                        </div>

                        <input
                          type="submit"
                          class="btn btn-primary"
                          value="Submit Review"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-overlay"></div>
          <div class="sidebar-toggle">
            <i class="icon-sliders"></i>
          </div>
          <aside class="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
            <div class="sidebar-wrapper">
              <div class="widget widget-brand">
                <a href="#">
                  <img src="assets/images/product-brand.png" alt="brand name" />
                </a>
              </div>

              <div class="widget widget-info">
                <ul>
                  <li>
                    <i class="icon-shipping"></i>
                    <h4>
                      FREE
                      <br />
                      SHIPPING
                    </h4>
                  </li>
                  <li>
                    <i class="icon-us-dollar"></i>
                    <h4>
                      100% MONEY
                      <br />
                      BACK GUARANTEE
                    </h4>
                  </li>
                  <li>
                    <i class="icon-online-support"></i>
                    <h4>
                      ONLINE
                      <br />
                      SUPPORT 24/7
                    </h4>
                  </li>
                </ul>
              </div>

              <div class="widget widget-banner">
                <div class="banner banner-image">
                  <a href="#">
                    <img
                      src="assets/images/banners/banner-sidebar.jpg"
                      alt="Banner Desc"
                    />
                  </a>
                </div>
              </div>
              <div class="widget widget-featured">
                <h3 class="widget-title">Featured Products</h3>

                <div class="widget-body">
                  <div
                    class="owl-carousel widget-featured-products"
                    data-toggle="owl"
                    data-owl-options="{
                                       'lazyLoad': true,
                                       'nav': true,
                                       'dots': false,
                                       'autoHeight': true
                                   }"
                  >
                    <div class="featured-col">
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-1.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Woo Album #2</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="product-price">$9.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-2.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Luxury bag</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="product-price">$350.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-3.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Patient Ninja</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="old-price">$35.00</span>
                            <span class="product-price">$30.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="featured-col">
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-4.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Woo Album #2</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="product-price">$9.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-5.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Luxury bag</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="product-price">$350.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-6.jpg" />
                          </a>
                        </figure>
                        <div class="product-details">
                          <h2 class="product-title">
                            <a href="product.html">Patient Ninja</a>
                          </h2>
                          <div class="ratings-container">
                            <div class="product-ratings">
                              <span
                                class="ratings"
                                style={{ width: "0%" }}
                              ></span>
                              <span class="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div class="price-box">
                            <span class="old-price">$35.00</span>
                            <span class="product-price">$30.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div class="featured-section">
        <div class="container">
          <h2 class="carousel-title">Featured Products</h2>

          <div class="featured-products owl-carousel owl-theme mb-2">
            <div class="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-1.jpg" />
                </a>
                <div class="btn-icon-group">
                  <button
                    class="btn-icon btn-add-cart"
                    data-toggle="modal"
                    data-target="#addCartModal"
                  >
                    <i class="icon-bag"></i>
                  </button>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div class="product-details">
                <div class="category-wrap">
                  <div class="category-list">
                    <a href="category.html" class="product-category">
                      category
                    </a>
                  </div>
                  <a href="#" class="btn-icon-wish">
                    <i class="icon-heart"></i>
                  </a>
                </div>
                <h2 class="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div class="ratings-container">
                  <div class="product-ratings">
                    <span class="ratings" style={{ width: "100%" }}></span>
                    <span class="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div class="price-box">
                  <span class="product-price">$49.00</span>
                </div>
              </div>
            </div>
            <div class="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-2.jpg" />
                </a>
                <div class="btn-icon-group">
                  <button
                    class="btn-icon btn-add-cart"
                    data-toggle="modal"
                    data-target="#addCartModal"
                  >
                    <i class="icon-bag"></i>
                  </button>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div class="product-details">
                <div class="category-wrap">
                  <div class="category-list">
                    <a href="category.html" class="product-category">
                      category
                    </a>
                  </div>
                  <a href="#" class="btn-icon-wish">
                    <i class="icon-heart"></i>
                  </a>
                </div>
                <h2 class="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div class="ratings-container">
                  <div class="product-ratings">
                    <span class="ratings" style={{ width: "100%" }}></span>
                    <span class="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div class="price-box">
                  <span class="product-price">$49.00</span>
                </div>
              </div>
            </div>
            <div class="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-3.jpg" />
                </a>
                <div class="btn-icon-group">
                  <button
                    class="btn-icon btn-add-cart"
                    data-toggle="modal"
                    data-target="#addCartModal"
                  >
                    <i class="icon-bag"></i>
                  </button>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div class="product-details">
                <div class="category-wrap">
                  <div class="category-list">
                    <a href="category.html" class="product-category">
                      category
                    </a>
                  </div>
                  <a href="#" class="btn-icon-wish">
                    <i class="icon-heart"></i>
                  </a>
                </div>
                <h2 class="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div class="ratings-container">
                  <div class="product-ratings">
                    <span class="ratings" style={{ width: "100%" }}></span>
                    <span class="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div class="price-box">
                  <span class="product-price">$49.00</span>
                </div>
              </div>
            </div>
            <div class="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-4.jpg" />
                </a>
                <div class="btn-icon-group">
                  <button
                    class="btn-icon btn-add-cart"
                    data-toggle="modal"
                    data-target="#addCartModal"
                  >
                    <i class="icon-bag"></i>
                  </button>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div class="product-details">
                <div class="category-wrap">
                  <div class="category-list">
                    <a href="category.html" class="product-category">
                      category
                    </a>
                  </div>
                  <a href="#" class="btn-icon-wish">
                    <i class="icon-heart"></i>
                  </a>
                </div>
                <h2 class="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div class="ratings-container">
                  <div class="product-ratings">
                    <span class="ratings" style={{ width: "100%" }}></span>
                    <span class="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div class="price-box">
                  <span class="product-price">$49.00</span>
                </div>
              </div>
            </div>
            <div class="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-5.jpg" />
                </a>
                <div class="btn-icon-group">
                  <button
                    class="btn-icon btn-add-cart"
                    data-toggle="modal"
                    data-target="#addCartModal"
                  >
                    <i class="icon-bag"></i>
                  </button>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  class="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div class="product-details">
                <div class="category-wrap">
                  <div class="category-list">
                    <a href="category.html" class="product-category">
                      category
                    </a>
                  </div>
                  <a href="#" class="btn-icon-wish">
                    <i class="icon-heart"></i>
                  </a>
                </div>
                <h2 class="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div class="ratings-container">
                  <div class="product-ratings">
                    <span class="ratings" style={{ width: "100%" }}></span>
                    <span class="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <div class="price-box">
                  <span class="product-price">$49.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </react.Fragment>
  );
}
