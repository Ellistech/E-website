import react, { useState, } from "react";
import ProductListSideBar from "./ProductListSideBar";
import Pagination from "./Pagination";
import ProductBanner from "./ProductBanner";
import ProductGridItem from "./ProductGridItem";
import ProductListItem from "./productListItem";

export default function ProductMenu() {
  const [productList] = useState([
    {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 1
    },
    {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 2
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 3
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 4
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 5
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 6
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 1
    }, {
      img: "assets/images/products/product-1.jpg",
      btn: "Quick View",
      name: "category",
      title: "Product Short Name",
      bagicon: "icon-bag",
      ratingicon: "product-ratings",
      hearticon: "icon-heart",
      oldprice: "$59.00",
      newprice: "$49.00",
      id: 6
    }
  ])

  const [viewType, setViewType] = useState('GRID');

  console.log(viewType);

  return (
    <react.Fragment>
      <ProductBanner />
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
                    onClick={() => setViewType('GRID')}
                    // href="category.html"
                    href="javascript:void(0)"
                    className={`layout-btn btn-grid ${viewType === 'GRID'? 'active': ''} `}
                    title="Grid"
                  >
                    <i className="icon-mode-grid"></i>
                  </a>
                  <a
                    onClick={() => setViewType('LIST')}
                    // href="category-list.html"
                    href="javascript:void(0)"
                    className={`layout-btn btn-list ${viewType === 'LIST'? 'active': ''} `}
                    title="List"
                  >
                    <i className="icon-mode-list"></i>
                  </a>
                </div>
              </nav>
              <div className="row row-sm">
               
                { productList.map(item=>{
                  return (
                    viewType === 'GRID'? <ProductGridItem item = {item}/> : <ProductListItem  item = {item}/>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </react.Fragment>
  );
}
