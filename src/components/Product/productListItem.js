export default function ProductListItem(props) {
    const { item } = props;
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
}


