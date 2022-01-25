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
import Blog from "./components/Pages/Blog";
import BlogPost from "./components/Pages/BlogPost";
import Contact from "./components/Pages/Contact";
import ProductMenu from "./components/Product/ProductMenu";


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

          <Route path="/blog" element={<Blog/>} />
          
          <Route path="/blogpost" element={<BlogPost/>} />

          <Route path="/contact" element={<Contact/>} />
r
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
