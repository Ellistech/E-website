export default function FormSideBar() {
  return (
    <aside className="sidebar col-lg-3">
      <div className="widget widget-dashboard">
        <h3 className="widget-title">My Account</h3>

        <ul className="list">
          <li className="active">
            <a href="#">Account Dashboard</a>
          </li>
          <li>
            <a href="#">Account Information</a>
          </li>
          <li>
            <a href="#">Address Book</a>
          </li>
          <li>
            <a href="#">My Orders</a>
          </li>
          <li>
            <a href="#">Billing Agreements</a>
          </li>
          <li>
            <a href="#">Recurring Profiles</a>
          </li>
          <li>
            <a href="#">My Product Reviews</a>
          </li>
          <li>
            <a href="#">My Tags</a>
          </li>
          <li>
            <a href="#">My Wishlist</a>
          </li>
          <li>
            <a href="#">My Applications</a>
          </li>
          <li>
            <a href="#">Newsletter Subscriptions</a>
          </li>
          <li>
            <a href="#">My Downloadable Products</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
