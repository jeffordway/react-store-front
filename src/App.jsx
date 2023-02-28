import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path="add" element={<ProductForm />} />
            <Route path=":productId/edit" element={<ProductForm />} />
            <Route path=":productId" element={<ProductDetails />} />
            <Route path="search" element={<SearchResults />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
