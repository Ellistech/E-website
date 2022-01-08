export default function FourBox() {
  return (
    <section class="mt-3 mb-3">
      <div class="container">
        <div
          class="owl-carousel owl-theme text-center"
          data-toggle="owl"
          data-owl-options="{
                        'loop' : false,
                        'nav': false,
                        'dots': true,
                        'margin': 20,
                        'autoHeight': true,
                        'autoplay': true,
                        'autoplayTimeout': 5000,
                        'responsive': {
                          '0': {
                            'items': 2
                          },
                          '570': {
                            'items': 2
                          },
                          '830': {
                            'items': 3
                          },
                          '1220': {
                            'items': 4
                          }
                        }
                    }"
        >
          <div class="home-product-list">
            <img src="assets/images/products/small/product-white-1.jpg" />
            <div class="product-details">
              <h4 class="product-title">
                <a href="product.html">
                  Top Sharp <br />
                  Knives
                </a>
              </h4>
              <button class="btn btn-dark">SHOP NOW</button>
            </div>
          </div>
          <div class="home-product-list">
            <img src="assets/images/products/small/product-white-2.jpg" />
            <div class="product-details">
              <h4 class="product-title">
                <a href="product.html">
                  HD Vision <br />
                  Web Cameras
                </a>
              </h4>
              <button class="btn btn-dark">SHOP NOW</button>
            </div>
          </div>
          <div class="home-product-list">
            <img src="assets/images/products/small/product-white-3.jpg" />
            <div class="product-details">
              <h4 class="product-title">
                <a href="product.html">
                  Mobiles <br />
                  And Tablets
                </a>
              </h4>
              <button class="btn btn-dark">SHOP NOW</button>
            </div>
          </div>
          <div class="home-product-list">
            <img src="assets/images/products/small/product-white-4.jpg" />
            <div class="product-details">
              <h4 class="product-title">
                <a href="product.html">
                  Smart <br /> Watches
                </a>
              </h4>
              <button class="btn btn-dark">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
