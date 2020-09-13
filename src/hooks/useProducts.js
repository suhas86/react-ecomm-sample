import useAxios from "./useAxios";
import useMultiAxios from "./useGetMultuAxios";
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
function useSelectedProducts(cart) {
  let pathArray = cart.map(({ id }) => `/products/${id}`);
  return useMultiAxios(pathArray, "GET");
}

export { useProducts, useProductsWithLimit, useProductsWithCategory, useProduct, useSelectedProducts };
