import React from "react"
import { Link } from "react-router-dom"
export default function ProductGrid(){
    return(
        <reactfragment>
        <main class="main">                                  
            <div class="banner banner-cat" style={{backgroundImage: "url('assets/images/banners/banner.jpg')",}}>
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
                        <Link to="/productgrid" class="layout-btn btn-grid active" title="Grid">
                            <i class="icon-mode-grid"></i>
                        </Link>
                        <Link to="/Productlist" class="layout-btn btn-list" title="List">
                            <i class="icon-mode-list"></i>
                        </Link>
                    </div>
                </nav>

                <div class="product-wrapper">
                    <div class="row row-sm product-intnro divide-line up-effect">
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-1.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-2.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-3.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-4.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-5.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-6.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-7.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-8.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-9.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:"100%"}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                               
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-10.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:'100%'}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                                 
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-11.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:'100%'}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                        <div class="col-6 col-md-4 col-xl-3">
                            <div class="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-12.jpg"/>
                                    </a>
                                    <div class="btn-icon-group">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i></button>
                                    </div>
                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick View</a> 
                                </figure>
                                <div class="product-details">
                                    <div class="category-wrap">
                                        <div class="category-list">
                                            <a href="category.html" class="product-category">category</a>
                                        </div>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style={{width:'100%'}}></span>
                                            <span class="tooltiptext tooltip-top">0</span>
                                        </div>
                                    </div>
                                    <div class="price-box">
                                        <span class="old-price">$59.00</span>
                                        <span class="product-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    </main>
    </reactfragment>  
)}