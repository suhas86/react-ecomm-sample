import useAxios from "./useAxios";

function useProducts() {
  return useAxios("/products", "GET");
}

function useProductsWithLimit(size = 0) {
  return useAxios(`/products?limit=${size}`, "GET");
}

function useProductsWithCategory(category) {
  return useAxios(`/products/category/${category}`, "GET");
}

export { useProducts, useProductsWithLimit, useProductsWithCategory };
