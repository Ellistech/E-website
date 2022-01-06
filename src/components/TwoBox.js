import { useState } from "react";

export default function TwoBox() {
  const [twobox, setTwoBox] = useState([
    {
      image: "assets/images/products/product-banner1.jpg",
      heading: "  ACTION <br/> CAMERAS",
      price: "$399",
      btn: "SHOP NOW",
    },
    {
      image: "assets/images/products/product-banner2.jpg",
      heading: "  ACTION <br/> CAMERAS",
      price: "$399",
      btn: "SHOP NOW",
    },
  ]);
  return (
    <section class="home-products-intro mt-3 mb-1">
      <div class="container">
        <div class="row row-sm">
          {twobox.map((item) => {
            return (
              <div class="col-xl-6">
                <div
                  class="banner-product bg-grey"
                  // style={{backgroundImage:`url('')`;background-position : 54%;}}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h2>
                    ACTION <br />
                    CAMERAS
                  </h2>
                  <div class="mr-5">
                    <h4>
                      Starting From<span class="price">$399</span>
                    </h4>
                    <button class="btn btn-primary">SHOP NOW</button>
                  </div>
                </div>
              </div>
            );
          })}

          {/*           
          <div class="col-xl-6">
            <div
              class="banner-product bg-grey"
              style="background-image: url('assets/images/products/product-banner2.jpg');
                                background-position : 48% 10%;"
            >
              <div class="ml-5" style="text-align: right">
                <h4>
                  Starting From<span class="price">$199</span>
                </h4>
                <button class="btn btn-primary">SHOP NOW</button>
              </div>
              <h2>
                FOR ALL <br />
                STYLES
              </h2>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
