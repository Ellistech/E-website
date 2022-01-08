import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Category from "./components/Category";
import MyAccountPage from "./components/MyAccountPage";
import HomePage from "./components/HomePage";
import ProductList from "./components/productList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
  return page;
}

export default App;
