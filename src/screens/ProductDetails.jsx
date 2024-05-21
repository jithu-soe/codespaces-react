// import React from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { data: product, loading, error } = useFetch(`/products/${id}`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="product-details">
//       <h1>{product.name}</h1>
//       <p>Price: {product.price}</p>
//       <div>
//         <h2>Description</h2>
//         <p>{product.description}</p>
//       </div>
//       <div>
//         <h2>Allergen Info</h2>
//         <p>{product.allergenInfo}</p>
//       </div>
//       <div>
//         <h2>Usage</h2>
//         <p>{product.usage}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import{ React,  useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`);

  const [expandedSections, setExpandedSections] = useState({
    description: false,
    allergens: false,
    usage: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.productImage} alt={product.name} />
      <p>Price: ${product.selling_price}</p>
      {/* <div>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
      <div>
        <h2>Allergen Info</h2>
        <p>{product.allergen_info}</p>
      </div>
      <div>
        <h2>Usage</h2>
        <p>{product.cooking_instruction}</p>
      </div> */}
      <div className="section">
        <h2 onClick={() => toggleSection('description')}>
          Description {expandedSections.description ? '-' : '+'}
        </h2>
        {expandedSections.description && <p>{product.description}</p>}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('allergens')}>
          Allergen Information {expandedSections.allergens ? '-' : '+'}
        </h2>
        {expandedSections.allergens && <p>{product.allergen_info}</p>}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('usage')}>
          Usage Instructions {expandedSections.usage ? '-' : '+'}
        </h2>
        {expandedSections.usage && <p>{product.cooking_instruction}</p>}
      </div>
    </div>
  );
};

export default ProductDetails;



