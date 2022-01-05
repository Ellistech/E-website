import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

function App() {
  const page = (
    <div>
      <HomePage />
    </div>
  );
  return <Layout content={page} />;
}

export default App;
