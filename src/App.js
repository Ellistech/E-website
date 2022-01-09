import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/Home/CategoryBanner";
import MyAccountPage from "./components/AccountPage/MyAccountPage";
import HomePage from "./components/Home/HomePage";
import ProductPage from "./components/category/ProductPage";
import ProductList from "./components/category/productList";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ShopingCart from "./components/Pages/ShopingCart";
import CheckoutShipping1 from "./components/Pages/checkoutShipping1";
import CheckoutShipping2 from "./components/Pages/CheckoutShipping2";
import CheckoutReview from "./components/Pages/CheckOutReview";
import Dashboard from "./components/AccountPage/Dashboard";
import About from "./components/Pages/About";
function App(props) {
  const page = (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/Category" element={<Category />} />
        </Routes>
        <Routes>
          <Route path="/myaccountpage" element={<MyAccountPage />} />
        </Routes>
        <Routes>
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/shopingcart" element={<ShopingCart />} />
        </Routes>
        <Routes>
          <Route path="/checkoutshipping1" element={<CheckoutShipping1 />} />
        </Routes>
        <Routes>
          <Route path="/checkoutshipping2" element={<CheckoutShipping2 />} />
        </Routes>
        <Routes>
          <Route path="/checkoutreview" element={<CheckoutReview />} />
        </Routes>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
  return page;
}

export default App;
