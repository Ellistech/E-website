import { useState } from "react"
import react from "react";
import FeaturedPage from "./FeaturedPage";
import TwoBox from "./TwoBox";
import CategoryBanner from "./CategoryBanner";
import NewArrival from "./NewArrival";
import SpecialOffer from "./SpecialOffer";
import ShippingBanner from "./ShippingBanner";
import BrandPage from "./BrandPage";
import FeaturedProduct from "./FeaturedProduct";
import { Carousel } from "reactstrap";

export default function HomePage() {
  const [slider, setSlider] = useState([
    {
      backgroungimg: "assets/images/slider/slide1.jpg",
      img: "assets/images/lazy.png",
      subtitle: "start the revolution",
      title: "drone pro 4",
      heading: " from",
      price: "$499",
      btn: "BUY NOW",
    },
    {
      backgroungimg: "assets/images/slider/slide2.jpg",
      img: "assets/images/lazy.png",
      subtitle: "amazing deals",
      title: "smartphone",
      heading: " from",
      price: "$499",
      btn: "BUY NOW",
    },
  ])

  
  // const carouselItemData = items.map((item) => {
  //   return (
  //       <CarouselItem
  //           key={item.src}
  //           onExited={() => setAnimating(false)}
  //           onExiting={() => setAnimating(true)}
  //       >
  //           <img src={item.src} alt={item.altText} />
  //       </CarouselItem>
  
  return (
    <react.Fragment>
      <main className="main home">
        <div className="home-top-container">
          <div className="home-slider owl-carousel owl-theme owl-carousel-lazy">
            {slider.map((item) => {
              return (
                <div
                  className="home-slide"
                  style={{
                    backgroundImage: `url(${item.backgroungimg})`,
                  }}

                >
                  <img
                    className="owl-lazy"
                    src={item.img}
                    alt="slider_image"
                  />
                  <div className="home-slide-content container">
                    <div>
                      <h2 className="home-slide-subtitle">{item.subtitle}</h2>
                      <h1 className="home-slide-title">{item.title}</h1>
                      <h2 className="home-slide-foot">
                        {item.heading}<span>{item.price}</span>
                      </h2>
                      <button className="btn btn-dark btn-buy">{item.btn}</button>
                    </div>
                  </div>
                </div>
              ) 
            })};
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
  )
}
