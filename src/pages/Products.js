import React from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { useProductsWithCategory } from "../hooks/useProducts";
import Loading from "../components/Loading";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const { category } = useParams();
  const { response: products, loading } = useProductsWithCategory(category);
  if (loading) {
    return <Loading text={`Fetching products for ${category}`} />;
  }
  return (
    <Container maxWidth="md">
      <ProductGrid products={products} />
    </Container>
  );
}
