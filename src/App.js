import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import FeaturedPage from "./components/FeaturedPage";
import Category from "./components/Category";
// import BrandPage from "./components/BrandPage";
import Shipping from "./components/Shipping";
// import FourBox from "./components/FourBox";
// import TwoBox from "./components/TwoBox";

function App() {
  const page = (
    <Router>
      <div>
        <Routes>
          <Route path="/Category" element={<Category />} />
        </Routes>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>{" "}
        <Routes>
          <Route path="/Shipping" element={<Shipping />} />
        </Routes>{" "}
        <Routes>
          <Route path="/featuredPage" element={<FeaturedPage />} />
        </Routes>
        {/* <HomePage />
        <FeaturedPage />
        <Category />
        <Shipping />
        <TwoBox />
        <BrandPage />
        <FourBox /> */}
      </div>
    </Router>
  );
  return <Layout content={page} />;
}

export default App;
