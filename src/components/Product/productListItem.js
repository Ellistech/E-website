import react, { useState } from "react";
export default function ProductListItem() {
    const [productlistitem, setProductGridItem] = useState([
        {
            img: "assets/images/products/product-1.jpg  ",
            category1: "accessories",
            category2: "fashion",
            title: "Woo Logo",
            ratingicon: "product-ratings",
            descrption: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            price: "$15.00",
            cartbtn: "btn-icon btn-add-cart",
            bagicon: "icon-bag",
            hearticon: "icon-heart",
            Quickviewbtn: "btn-quickview",

        },
        {
            img: "assets/images/products/product-1.jpg  ",
            category1: "accessories",
            category2: "fashion",
            title: "Woo Logo",
            ratingicon: "product-ratings",
            descrption: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            price: "$15.00",
            cartbtn: "btn-icon btn-add-cart",
            bagicon: "icon-bag",
            hearticon: "icon-heart",
            Quickviewbtn: "btn-quickview",

        },
         {
            img: "assets/images/products/product-1.jpg  ",
            category1: "accessories",
            category2: "fashion",
            title: "Woo Logo",
            ratingicon: "product-ratings",
            descrption: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            price: "$15.00",
            cartbtn: "btn-icon btn-add-cart",
            bagicon: "icon-bag",
            hearticon: "icon-heart",
            Quickviewbtn: "btn-quickview",

        }, 
        {
            img: "assets/images/products/product-1.jpg  ",
            category1: "accessories",
            category2: "fashion",
            title: "Woo Logo",
            ratingicon: "product-ratings",
            descrption: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            price: "$15.00",
            cartbtn: "btn-icon btn-add-cart",
            bagicon: "icon-bag",
            hearticon: "icon-heart",
            Quickviewbtn: "btn-quickview",

        },


    ])
    return (
        <react.Fragment>
            <main class="main">
                <div class="banner banner-cat" style={{ backgroundImage: "url('assets/images/banners/banner.jpg')" }}>
                    <div class="container">
                        <div class="banner-content">
                            <h2 class="banner-subtitle text-left">start the revolution</h2>
                            <h1 class="banner-title text-left">
                                drone pro 4
                            </h1>
                            <h2 class="banner-foot text-left">from <span>$499</span></h2>
                        </div>
                    </div>
                </div>

                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Men</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Accessories</li>
                        </ol>
                    </div>
                </nav>

                <div class="container mt-4">
                    <div class="row">
                        <div class="col-lg-9">
                            <nav class="toolbox">
                                <div class="toolbox-left">
                                    <div class="toolbox-item toolbox-sort">
                                        <div class="select-custom">
                                            <select name="orderby" class="form-control">
                                                <option value="menu_order" selected="selected">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                        </div>

                                        <a href="#" class="sorter-btn" title="Set Ascending Direction"><span class="sr-only">Set Ascending Direction</span></a>
                                    </div>
                                </div>

                                <div class="toolbox-item toolbox-show">
                                    <label>Showing 1–9 of 60 results</label>
                                </div>

                                <div class="layout-modes">
                                    <a href="category.html" class="layout-btn btn-grid" title="Grid">
                                        <i class="icon-mode-grid"></i>
                                    </a>
                                    <a href="category-list.html" class="layout-btn btn-list active" title="List">
                                        <i class="icon-mode-list"></i>
                                    </a>
                                </div>
                            </nav>

                            <div class="row row-sm">
                                {productlistitem.map((item) => {
                                    return (
                                        <div class="col-6 col-sm-12 product-default left-details product-list">
                                            <figure>
                                                <a href="product.html">
                                                    <img src={item.img} />
                                                </a>
                                            </figure>
                                            <div class="product-details">
                                                <div class="category-list">
                                                    <a href="category.html" class="product-category">{item.category1}</a>,
                                                    <a href="category.html" class="product-category">{item.category2}</a>
                                                </div>
                                                <h2 class="product-title">
                                                    <a href="product.html">{item.title}</a>
                                                </h2>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style={{ width: '100%' }}></span>
                                                        <span class="tooltiptext tooltip-top">5.00</span>
                                                    </div>
                                                </div>
                                                <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                                <div class="price-box">
                                                    <span class="product-price">{item.price}</span>
                                                </div>
                                                <div class="product-action">
                                                    <button class={item.cartbtn} data-toggle="modal" data-target="#addCartModal"><i class={item.bagicon}></i>ADD TO CART</button>
                                                    <a href="#" class="btn-icon-wish"><i class={item.hearticon}></i></a>
                                                    <a href="ajax/product-quick-view.html" class={item.Quickviewbtn} title="Quick View"><i class="fas fa-external-link-alt"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                            <nav class="toolbox toolbox-pagination">
                                <div class="toolbox-item toolbox-show">
                                    <label>Showing 1–9 of 60 results</label>
                                </div>

                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link page-link-btn" href="#"><i class="icon-angle-left"></i></a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><span>...</span></li>
                                    <li class="page-item"><a class="page-link" href="#">15</a></li>
                                    <li class="page-item">
                                        <a class="page-link page-link-btn" href="#"><i class="icon-angle-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <aside class="sidebar-shop col-lg-3 order-lg-first">
                            <div class="sidebar-wrapper">
                                <div class="widget">
                                    <h3 class="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Men</a>
                                    </h3>

                                    <div class="collapse show" id="widget-body-2">
                                        <div class="widget-body">
                                            <ul class="cat-list">
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Watch Fashion</a></li>
                                                <li><a href="#">Tees, Knits & Polos</a></li>
                                                <li><a href="#">Pants & Denim</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Price</a>
                                    </h3>

                                    <div class="collapse show" id="widget-body-3">
                                        <div class="widget-body">
                                            <form action="#">
                                                <div class="price-slider-wrapper">
                                                    <div id="price-slider"></div>
                                                </div>

                                                <div class="filter-price-action">
                                                    <button type="submit" class="btn btn-primary">Filter</button>

                                                    <div class="filter-price-text">
                                                        Price:
                                                        <span id="filter-price-range"></span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Size</a>
                                    </h3>

                                    <div class="collapse show" id="widget-body-4">
                                        <div class="widget-body">
                                            <ul class="cat-list">
                                                <li><a href="#">Small</a></li>
                                                <li><a href="#">Medium</a></li>
                                                <li><a href="#">Large</a></li>
                                                <li><a href="#">Extra Large</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget">
                                    <h3 class="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-5" role="button" aria-expanded="true" aria-controls="widget-body-5">Brand</a>
                                    </h3>

                                    <div class="collapse show" id="widget-body-5">
                                        <div class="widget-body">
                                            <ul class="cat-list">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Calvin Klein (26)</a></li>
                                                <li><a href="#">Diesel (3)</a></li>
                                                <li><a href="#">Lacoste (8)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget">
                                    <h3 class="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                                    </h3>

                                    <div class="collapse show" id="widget-body-6">
                                        <div class="widget-body">
                                            <ul class="config-swatch-list">
                                                <li class="active">
                                                    <a href="#">
                                                        <span class="color-panel" style={{ backgroundColor: '#1645f3' }}></span>
                                                        <span>Blue</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="color-panel" style={{ backgroundColor: '#f11010' }}></span>
                                                        <span>Red</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="color-panel" style={{ backgroundColor: '#fe8504' }}></span>
                                                        <span>Orange</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="color-panel" style={{ backgroundColor: '#2da819' }}></span>
                                                        <span>Green</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

        </react.Fragment>
    )
}


