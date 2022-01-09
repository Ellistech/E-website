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
    <section className="home-products-intro mt-3 mb-1">
      <div className="container">
        <div className="row row-sm">
          {twobox.map((item) => {
            return (
              <div className="col-xl-6">
                <div
                  className="banner-product bg-grey"
                  // style={{backgroundImage:`url('')`;background-position : 54%;}}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "54%",
                  }}
                >
                  <h2>
                    ACTION <br />
                    CAMERAS
                  </h2>
                  <div className="mr-5">
                    <h4>
                      Starting From<span className="price">$399</span>
                    </h4>
                    <button className="btn btn-primary">SHOP NOW</button>
                  </div>
                </div>
              </div>
            );
          })}

          {/*           
          <div className="col-xl-6">
            <div
              className="banner-product bg-grey"
              style="background-image: url('assets/images/products/product-banner2.jpg');
                                background-position : 48% 10%;"
            >
              <div className="ml-5" style="text-align: right">
                <h4>
                  Starting From<span className="price">$199</span>
                </h4>
                <button className="btn btn-primary">SHOP NOW</button>
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
