import react from "react";

export default function CheckoutReview() {
  return (
    <react.Fragment>
      <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
          <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </div>
        </nav>

        <div class="container">
          <ul class="checkout-progress-bar">
            <li>
              <span>Shipping</span>
            </li>
            <li class="active">
              <span>Review &amp; Payments</span>
            </li>
          </ul>
          <div class="row">
            <div class="col-lg-4">
              <div class="order-summary">
                <h3>Summary</h3>

                <h4>
                  <a
                    data-toggle="collapse"
                    href="#order-cart-section"
                    class="collapsed"
                    role="button"
                    aria-expanded="false"
                    aria-controls="order-cart-section"
                  >
                    2 products in Cart
                  </a>
                </h4>

                <div class="collapse" id="order-cart-section">
                  <table class="table table-mini-cart">
                    <tbody>
                      <tr>
                        <td class="product-col">
                          <figure class="product-image-container">
                            <a href="product.html" class="product-image">
                              <img
                                src="assets/images/products/product-1.jpg"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <div>
                            <h2 class="product-title">
                              <a href="product.html">Baseball Cap</a>
                            </h2>

                            <span class="product-qty">Qty: 4</span>
                          </div>
                        </td>
                        <td class="price-col">$17.90</td>
                      </tr>

                      <tr>
                        <td class="product-col">
                          <figure class="product-image-container">
                            <a href="product.html" class="product-image">
                              <img
                                src="assets/images/products/product-2.jpg"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <div>
                            <h2 class="product-title">
                              <a href="product.html">Dress Shoes</a>
                            </h2>

                            <span class="product-qty">Qty: 4</span>
                          </div>
                        </td>
                        <td class="price-col">$7.90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="checkout-info-box">
                <h3 class="step-title">
                  Ship To:
                  <a href="#" title="Edit" class="step-title-edit">
                    <span class="sr-only">Edit</span>
                    <i class="icon-pencil"></i>
                  </a>
                </h3>

                <address>
                  Desmond Mason <br />
                  123 Street Name, City, USA <br />
                  Los Angeles, California 03100 <br />
                  United States <br />
                  (123) 456-7890
                </address>
              </div>

              <div class="checkout-info-box">
                <h3 class="step-title">
                  Shipping Method:
                  <a href="#" title="Edit" class="step-title-edit">
                    <span class="sr-only">Edit</span>
                    <i class="icon-pencil"></i>
                  </a>
                </h3>

                <p>Flat Rate - Fixed</p>
              </div>
            </div>

            <div class="col-lg-8 order-lg-first">
              <div class="checkout-payment">
                <h2 class="step-title">Payment Method:</h2>

                <h4>Check / Money order</h4>

                <div class="form-group-custom-control">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="change-bill-address"
                      value="1"
                    />
                    <label
                      class="custom-control-label"
                      for="change-bill-address"
                    >
                      My billing and shipping address are the same
                    </label>
                  </div>
                </div>

                <div id="checkout-shipping-address">
                  <address>
                    Desmond Mason <br />
                    123 Street Name, City, USA <br />
                    Los Angeles, California 03100 <br />
                    United States <br />
                    (123) 456-7890
                  </address>
                </div>

                <div id="new-checkout-address" class="show">
                  <form action="#">
                    <div class="form-group required-field">
                      <label>First Name </label>
                      <input type="text" class="form-control" required />
                    </div>

                    <div class="form-group required-field">
                      <label>Last Name </label>
                      <input type="text" class="form-control" required />
                    </div>

                    <div class="form-group">
                      <label>Company </label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group required-field">
                      <label>Street Address </label>
                      <input type="text" class="form-control" required />
                      <input type="text" class="form-control" required />
                    </div>

                    <div class="form-group required-field">
                      <label>City </label>
                      <input type="text" class="form-control" required />
                    </div>

                    <div class="form-group">
                      <label>State/Province</label>
                      <div class="select-custom">
                        <select class="form-control">
                          <option value="CA">California</option>
                          <option value="TX">Texas</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group required-field">
                      <label>Zip/Postal Code </label>
                      <input type="text" class="form-control" required />
                    </div>

                    <div class="form-group">
                      <label>Country</label>
                      <div class="select-custom">
                        <select class="form-control">
                          <option value="USA">United States</option>
                          <option value="Turkey">Turkey</option>
                          <option value="China">China</option>
                          <option value="Germany">Germany</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group required-field">
                      <label>Phone Number </label>
                      <div class="form-control-tooltip">
                        <input type="tel" class="form-control" required />
                        <span
                          class="input-tooltip"
                          data-toggle="tooltip"
                          title="For delivery questions."
                          data-placement="right"
                        >
                          <i class="icon-question-circle"></i>
                        </span>
                      </div>
                    </div>

                    <div class="form-group-custom-control">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="address-save"
                        />
                        <label class="custom-control-label" for="address-save">
                          Save in Address book
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="clearfix">
                  <a href="#" class="btn btn-primary float-right">
                    Place Order
                  </a>
                </div>
              </div>

              <div class="checkout-discount">
                <h4>
                  <a
                    data-toggle="collapse"
                    href="#checkout-discount-section"
                    class="collapsed"
                    role="button"
                    aria-expanded="false"
                    aria-controls="checkout-discount-section"
                  >
                    Apply Discount Code
                  </a>
                </h4>

                <div class="collapse" id="checkout-discount-section">
                  <form action="#">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Enter discount code"
                      required
                    />
                    <button
                      class="btn btn-sm btn-outline-secondary"
                      type="submit"
                    >
                      Apply Discount
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6"></div>
      </main>
    </react.Fragment>
  );
}
