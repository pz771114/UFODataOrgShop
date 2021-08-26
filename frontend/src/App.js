import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Route path="/" exact>
        <Content />
      </Route>
      <Route path="/product/:id" exact>
        <ProductDetails />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
