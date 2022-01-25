import react from "react";
import ProductListSideBar from "./ProductListSideBar";
export default function ProductMenu() {
  return (
    <react.Fragment>
      <div
        class="banner banner-cat"                   
        style={{
          backgroundImage: "url('assets/images/banners/banner.jpg')",
        }}
      >
        <div class="container">
          <div class="banner-content">
            <h2 class="banner-subtitle text-left">start the revolution</h2>
            <h1 class="banner-title text-left">drone pro 4</h1>
            <h2 class="banner-foot text-left">
              from <span>$499</span>
            </h2>
          </div>
        </div>
      </div>
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Men</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Accessories
            </li>
          </ol>
        </div>
      </nav>
      <div className="container">
        <div className="mt-4">
          <div className="row">
            <ProductListSideBar />
            <div className="col-lg-9">
              <nav className="toolbox">
                <div className="toolbox-left">
                  <div className="toolbox-item toolbox-sort">
                    <div className="select-custom">
                      <select name="orderby" className="form-control">
                        <option value="menu_order" selected="selected">
                          Default Sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>

                    <a
                      href="#"
                      className="sorter-btn"
                      title="Set Ascending Direction"
                    >
                      <span className="sr-only">Set Ascending Direction</span>
                    </a>
                  </div>
                </div>
                <div className="toolbox-item toolbox-show">
                  <label>Showing 1–9 of 60 results</label>
                </div>

                <div className="layout-modes">
                  <a
                    // href="category.html"
                    href="javascript:void(0)"
                    className="layout-btn btn-grid active"
                    title="Grid"
                  >
                    <i className="icon-mode-grid"></i>
                  </a>
                  <a
                    // href="category-list.html"
                    href="javascript:void(0)"
                    className="layout-btn btn-list"
                    title="List"
                  >
                    <i className="icon-mode-list"></i>
                  </a>
                </div>
              </nav>
              <div className="row row-sm">
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-1.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-2.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-3.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-4.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-5.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-6.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-7.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-8.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-9.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-10.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-11.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-3">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/product-12.jpg" />
                      </a>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">
                            category
                          </a>
                        </div>
                        <a href="#" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </react.Fragment>
  );
}
