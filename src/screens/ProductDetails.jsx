import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <div>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
      <div>
        <h2>Allergen Info</h2>
        <p>{product.allergenInfo}</p>
      </div>
      <div>
        <h2>Usage</h2>
        <p>{product.usage}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
