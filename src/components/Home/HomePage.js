import react from "react";
import FeaturedPage from "./FeaturedPage";
import TwoBox from "./TwoBox";
import CategoryBanner from "./CategoryBanner";
import NewArrival from "./NewArrival";
import SpecialOffer from "./SpecialOffer";
import ShippingBanner from "./ShippingBanner";
import BrandPage from "./BrandPage";
import FeaturedProduct from "./FeaturedProduct";

export default function HomePage() {
  return (
    <react.Fragment>
      <main className="main home">
        <div className="home-top-container">
          <div className="home-slider owl-carousel owl-theme owl-carousel-lazy">
            <div
              className="home-slide"
              style={{
                backgroundImage: "url('assets/images/slider/slide1.jpg')",
              }}
            >
              <img
                className="owl-lazy"
                src="assets/images/lazy.png"
                alt="slider_image"
              />
              <div className="home-slide-content container">
                <div>
                  <h2 className="home-slide-subtitle">start the revolution</h2>
                  <h1 className="home-slide-title">drone pro 4</h1>
                  <h2 className="home-slide-foot">
                    from <span>$499</span>
                  </h2>
                  <button className="btn btn-dark btn-buy">BUY NOW</button>
                </div>
              </div>
            </div>
            <div
              className="home-slide"
              style={{
                backgroundImage: "url('assets/images/slider/slide2.jpg')",
              }}
            >
              <img
                className="owl-lazy"
                src="assets/images/lazy.png"
                alt="slider_image"
              />
              <div className="home-slide-content container">
                <div>
                  <h2 className="home-slide-subtitle">amazing deals</h2>
                  <h1 className="home-slide-title">smartphone</h1>
                  <h2 className="home-slide-foot">
                    from <span>$199</span>
                  </h2>
                  <button className="btn btn-dark btn-buy">BUY NOW</button>
                </div>
              </div>
            </div>

            <div
              className="home-slide"
              style={{
                backgroundImage: "url('assets/images/slider/slide3.jpg')",
              }}
            >
              <img
                className="owl-lazy"
                src="assets/images/lazy.png"
                alt="slider_image"
              />
              <div className="home-slide-content container">
                <div>
                  <h2 className="home-slide-subtitle">
                    best price of the year
                  </h2>
                  <h1 className="home-slide-title">top accessories</h1>
                  <h2 className="home-slide-foot">
                    from <span>$19</span>
                  </h2>
                  <button className="btn btn-dark btn-buy">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-slider-sidebar">
            <ul>
              <li className="active">Drones</li>
              <li>Phones</li>
              <li>Accessories</li>
            </ul>
          </div>
        </div>
      </main>
      <FeaturedPage />
      <CategoryBanner />
      <TwoBox />
      <NewArrival />
      <SpecialOffer />
      <BrandPage />
      <FeaturedProduct />
      <ShippingBanner />
    </react.Fragment>
  );
}
