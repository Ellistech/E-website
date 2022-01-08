export default function ProductListSideBAr() {
  return (
    <aside className="sidebar-shop col-lg-3 order-lg-first">
      <div className="sidebar-wrapper">
        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-1"
              role="button"
              aria-expanded="false"
              aria-controls="widget-body-1"
              className="collapsed"
            >
              Women
            </a>
          </h3>

          <div className="collapse hide" id="widget-body-1">
            <div className="widget-body">
              <ul className="cat-list">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Watch Fashion</a>
                </li>
                <li>
                  <a href="#">Tees, Knits & Polos</a>
                </li>
                <li>
                  <a href="#">Pants & Denim</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-2"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-2"
            >
              Men
            </a>
          </h3>

          <div className="collapse show" id="widget-body-2">
            <div className="widget-body">
              <ul className="cat-list">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Watch Fashion</a>
                </li>
                <li>
                  <a href="#">Tees, Knits & Polos</a>
                </li>
                <li>
                  <a href="#">Pants & Denim</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-3"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-3"
            >
              Price
            </a>
          </h3>

          <div className="collapse show" id="widget-body-3">
            <div className="widget-body">
              <form action="#">
                <div className="price-slider-wrapper">
                  <div id="price-slider"></div>
                </div>
                <div className="filter-price-action">
                  <div className="filter-price-text">
                    Price:
                    <span id="filter-price-range"></span>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-4"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-4"
            >
              Size
            </a>
          </h3>

          <div className="collapse show" id="widget-body-4">
            <div className="widget-body">
              <ul className="cat-list">
                <li>
                  <a href="#">Small</a>
                </li>
                <li>
                  <a href="#">Medium</a>
                </li>
                <li>
                  <a href="#">Large</a>
                </li>
                <li>
                  <a href="#">Extra Large</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-5"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-5"
            >
              Brand
            </a>
          </h3>

          <div className="collapse show" id="widget-body-5">
            <div className="widget-body">
              <ul className="cat-list">
                <li>
                  <a href="#">Adidas</a>
                </li>
                <li>
                  <a href="#">Calvin Klein (26)</a>
                </li>
                <li>
                  <a href="#">Diesel (3)</a>
                </li>
                <li>
                  <a href="#">Lacoste (8)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-6"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-6"
            >
              Color
            </a>
          </h3>

          <div className="collapse show" id="widget-body-6">
            <div className="widget-body">
              <ul className="config-swatch-list">
                <li className="active">
                  <a href="#">
                    <span
                      className="color-panel"
                      style={{ backgroundColor: "#1645f3" }}
                    ></span>
                    <span>Blue</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="color-panel"
                      style={{ backgroundColor: "#f11010" }}
                    ></span>
                    <span>Red</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="color-panel"
                      style={{ backgroundColor: "#fe8504" }}
                    ></span>
                    <span>Orange</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="color-panel"
                      style={{ backgroundColor: "#2da819" }}
                    ></span>
                    <span>Green</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
