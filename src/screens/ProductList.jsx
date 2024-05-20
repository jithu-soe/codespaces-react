import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { postRequest } from "../axios";
import "./ProductList.css";

const ProductList = () => {
  const { data: products, loading, error } = useFetch("/products");
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productAllergenInfo, setProductAllergenInfo] = useState("");

  const handleAddProduct = async () => {
    const newProduct = {
      name: productName,
      description: productDescription,
      allergenInfo: productAllergenInfo,
    };
    await postRequest("/products", newProduct);
    setShowModal(false);
    // Refresh product list or optimistically update state
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      <button onClick={() => setShowModal(true)}>Add Product</button>
      {showModal && (
        <div className="modal">
          <h2>Add Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Product Allergen Info"
            value={productAllergenInfo}
            onChange={(e) => setProductAllergenInfo(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add</button>
        </div>
      )}
      <div className="grid">
        {products.sort((a, b) => a.price - b.price).map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
