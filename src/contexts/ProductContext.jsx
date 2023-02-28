import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productQuery, setProductQuery] = useState([]);
  const [query, setQuery] = useState("");

  const baseUrl = "http://localhost:3001/products/";
  const featuredUrl = "http://localhost:3001/products?featured=true";
  const queryUrl = "http://localhost:3001/products?q=";

  useEffect(() => {
    async function loadProducts() {
      await refreshProducts();
      await refreshFeatured();
    }
    loadProducts();
  }, []);

  async function refreshProducts() {
    const response = await axios.get(baseUrl);
    setProducts(response.data);
  }

  async function refreshFeatured() {
    const response = await axios.get(featuredUrl);
    setFeaturedProducts(response.data);
  }

  async function refreshQuery() {
    const q = queryUrl + query;
    console.log(q);
    const response = await axios.get(q);
    setProductQuery(response.data);
  }

  async function getProduct(id) {
    try {
      const response = await axios.get(baseUrl + id);
      return await new Promise((resolve) => resolve(response.data));
    } catch (error) {
      return await new Promise((reject) => reject(error.response.statusText));
    }
  }

  async function deleteProduct(id) {
    await axios.delete(baseUrl + id);
    refreshProducts();
    refreshFeatured();
  }

  async function addProduct(product) {
    const response = await axios.post(baseUrl, product);
    refreshProducts();
    return await new Promise((resolve) => resolve(response.data));
  }

  async function updateProduct(product) {
    const response = await axios.put(baseUrl + product.id, product);
    refreshProducts();
    return await new Promise((resolve) => resolve(response.data));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        featuredProducts,
        productQuery,
        setProductQuery,
        query,
        setQuery,
        refreshProducts,
        refreshFeatured,
        refreshQuery,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};