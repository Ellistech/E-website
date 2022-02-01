export default function ProductGridItem(props) {
    const { item } = props;
    return (
        <div class="col-6 col-md-4 col-xl-3">
            <div class="product-default inner-quickview inner-icon">
                <figure>
                    <a href="product.html">
                        <img src={item.img} />
                    </a>
                    <div class="btn-icon-group">
                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class={item.bagicon}></i></button>
                    </div>
                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">{item.btn}</a>
                </figure>
                <div class="product-details">
                    <div class="category-wrap">
                        <div class="category-list">
                            <a href="category.html" class="product-category">{item.name}</a>
                        </div>
                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                    </div>
                    <h2 class="product-title">
                        <a href="product.html">{item.title}</a>
                    </h2>
                    <div class="ratings-container">
                        <div class={item.ratingicon}>
                            <span class="ratings" style={{ width: "100%" }}></span>
                            <span class="tooltiptext tooltip-top">0</span>
                        </div>
                    </div>
                    <div class="price-box">
                        <span class="old-price">{item.oldprice}</span>
                        <span class="product-price">{item.newprice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}