import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import FeaturedPage from "./components/FeaturedPage";
import Category from "./components/Category";
import BrandPage from "./components/BrandPage";
import Shipping from "./components/Shipping";
import FourBox from "./components/FourBox";

function App() {
  const page = (
    <div>
      <HomePage />
      <FeaturedPage />
      <Category />
      <Shipping />
      <BrandPage />
      <FourBox />
    </div>
  );
  return <Layout content={page} />;
}

export default App;
