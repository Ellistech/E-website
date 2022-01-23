import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import CategoryBanner from "./components/Home/CategoryBanner";
import MyAccountPage from "./components/AccountPage/MyAccountPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ShopingCart from "./components/Pages/ShopingCart";
import CheckoutShipping1 from "./components/Pages/checkoutShipping1";
import CheckoutShipping2 from "./components/Pages/CheckoutShipping2";
import CheckoutReview from "./components/Pages/CheckOutReview";
import Dashboard from "./components/AccountPage/Dashboard";
import About from "./components/Pages/About";
import ProductMenu from "./components/Product/ProductMenu";
import ProductList from "./components/Product/productList";
import ProductGrid from "./components/Product/ProductGrid";

function App() {
  const page = (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Categorybanner" element={<CategoryBanner />} />

          <Route path="/myaccountpage" element={<MyAccountPage />} />

          <Route path="/productmenu" element={<ProductMenu />} />

          <Route path="/shopingcart" element={<ShopingCart />} />

          <Route path="/productlist" element={<ProductList />} />

          <Route path="/productgrid" element={<ProductGrid />} />

          <Route path="/checkoutshipping1" element={<CheckoutShipping1 />} />

          <Route path="/checkoutshipping2" element={<CheckoutShipping2 />} />

          <Route path="/checkoutreview" element={<CheckoutReview />} />

          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
  return page;
}

export default App;
