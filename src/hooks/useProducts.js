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
function useProduct(productId) {
  return useAxios(`/products/${productId}`, "GET");
}

export { useProducts, useProductsWithLimit, useProductsWithCategory, useProduct };
