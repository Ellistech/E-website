import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import FeaturedPage from "./components/FeaturedPage";
import Category from "./components/Category";
import BrandPage from "./components/BrandPage";
import Shipping from "./components/Shipping";
import MyAccountPage from "./components/MyAccountPage";
import FourBox from "./components/FourBox";
import TwoBox from "./components/TwoBox";
import FormSideBar from "./components/FormSideBar";
import HomePage from "./components/HomePage";
// import ProductList from "./components/productList";
import ProductListSideBAr from "./components/ProductListSideBar";

function App() {
  const page = (
    <div>
      <Router>
        {/* <Routes>
          <Routes path="/" element={<HomePage />} />
        </Routes> */}
        <Routes>
          <Route path="/Category" element={<Category />} />
        </Routes>{" "}
        <Routes>
          <Route path="/Shipping" element={<Shipping />} />
        </Routes>{" "}
        <Routes>
          <Route path="/myaccountpage" element={<MyAccountPage />} />
        </Routes>
        {/* <HomePage />
      <FeaturedPage />
      <Category />
      <Shipping />
      <TwoBox />
      <BrandPage />
      <FourBox />
      <MyAccountPage /> */}
        {/* <FormSideBar />
      {/* <ProductList /> */}
        {/* <ProductListSideBAr /> */}
      </Router>
    </div>
  );
  return <Layout content={page} />;
}

export default App;
