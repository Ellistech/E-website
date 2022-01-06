import { useState } from "react";

export default function FeaturedPage() {
  return (
    <div>
      <h2>iam featured Pages</h2>
    </div>
  );
}
// const [featuredPage, setFeaturedpPage] = useState({
//   img: "assets/images/products/product-20.jpg",
//   groupIcon: "btn-icon-group",
//   cartIcon: "btn-icon btn-add-cart",
//   Bagicon: "icon-bag",
//   title1: "Quick View",
//   title2: "category",
//   title3: "Product Short Name",
//   wishIcon: "btn-icon-wish",
//   heartIcon: "icon-heart",
//   oldPrice: "$59.00",
//   productPrice: "$49.00",
// });
// return (
//   <section class="product-panel mt-5">
//     <div class="container" />
//     <div class="section-title">
//       <h2>Featured Products</h2>
//     </div>
//     <div class="product-intro divide-line mt-2 mb-8">
//       {featuredPage.map((item) => {
//         return (
//           <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
//             <figure>
//               <a href="product.html">
//                 <img src={item.img} />
//               </a>
//               <div class={item.groupIcon}>
//                 <button
//                   class={item.cartIcon}
//                   data-toggle="modal"
//                   data-target="#addCartModal"
//                 >
//                   <i class={item.Bagicon}></i>
//                 </button>
//               </div>
//               <a
//                 href="ajax/product-quick-view.html"
//                 class="btn-quickview"
//                 title="Quick View"
//               >
//                 {item.title1}
//               </a>
//             </figure>
//             <div class="product-details">
//               <div class="category-wrap">
//                 <div class="category-list">
//                   <a href="category.html" class="product-category">
//                     {item.title2}
//                   </a>
//                 </div>
//                 <a href="#" class={item.wishIcon}>
//                   <i class={item.heartIcon}></i>
//                 </a>
//               </div>
//               <h2 class="product-title">
//                 <a href="product.html">{item.title3}</a>
//               </h2>
//               <div class="ratings-container">
//                 <div class="product-ratings">
//                   <span class="ratings" style="width:0%"></span>
//                   <span class="tooltiptext tooltip-top">0</span>
//                 </div>
//               </div>
//               <div class="price-box">
//                 <span class="old-price">{item.oldPrice}</span>
//                 <span class="product-price">{item.productPrice}</span>
//               </div>
//             </div>
// //           </div>
//         );
//       })}

{
  /* <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
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
                <span class="ratings" style="width:0%"></span>
                <span class="tooltiptext tooltip-top">0</span>
              </div>
            </div>
            <div class="price-box">
              <span class="old-price">$59.00</span>
              <span class="product-price">$49.00</span>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
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
                <span class="ratings" style="width:0%"></span>
                <span class="tooltiptext tooltip-top">0</span>
              </div>
            </div>
            <div class="price-box">
              <span class="old-price">$59.00</span>
              <span class="product-price">$49.00</span>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
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
                <span class="ratings" style="width:0%"></span>
                <span class="tooltiptext tooltip-top">0</span>
              </div>
            </div>
            <div class="price-box">
              <span class="old-price">$59.00</span>
              <span class="product-price">$49.00</span>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
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
                <span class="ratings" style="width:0%"></span>
                <span class="tooltiptext tooltip-top">0</span>
              </div>
            </div>
            <div class="price-box">
              <span class="old-price">$59.00</span>
              <span class="product-price">$49.00</span>
            </div>
          </div>
          <div class="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-6.jpg" />
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
                  <span class="ratings" style="width:0%"></span>
                  <span class="tooltiptext tooltip-top">0</span>
                </div>
              </div>
              <div class="price-box">
                <span class="old-price">$59.00</span>
                <span class="product-price">$49.00</span>
              </div>
            </div>
          </div>
//         </div> */
}
//       </div>
//     </section>
//   );
// }
