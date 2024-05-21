// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import { postRequest } from "../axios";
// import "./ProductList.css";

// const ProductList = () => {
//   const { data: products, loading, error } = useFetch("/products");
//   const [showModal, setShowModal] = useState(false);
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productAllergenInfo, setProductAllergenInfo] = useState("");

//   const handleAddProduct = async () => {
//     const newProduct = {
//       name: productName,
//       description: productDescription,
//       allergenInfo: productAllergenInfo,
//     };
//     await postRequest("/products", newProduct);
//     setShowModal(false);
//     // Refresh product list or optimistically update state
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="product-list">
//       <button onClick={() => setShowModal(true)}>Add Product</button>
//       {showModal && (
//         <div className="modal">
//           <h2>Add Product</h2>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <textarea
//             placeholder="Product Description"
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Product Allergen Info"
//             value={productAllergenInfo}
//             onChange={(e) => setProductAllergenInfo(e.target.value)}
//           />
//           <button onClick={handleAddProduct}>Add</button>
//         </div>
//       )}
//       <div className="grid">
//         {products.sort((a, b) => a.price - b.price).map((product) => (
//           <div key={product.id} className="product-card">
//             <Link to={`/products/${product.id}`}>
//               <h3>{product.name}</h3>
//               <p>{product.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { postRequest } from '../axios';
// import useFetch from '../hooks/useFetch';
// import './ProductList.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productAllergenInfo, setProductAllergenInfo] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('https://frontend-assessment-server.onrender.com/api/products');
//       const data = await res.json();
//       setProducts(data || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddProduct = async () => {
//     const newProduct = {
//       name: productName,
//       description: productDescription,
//       allergen_info: productAllergenInfo,
//       price: productPrice,
//     };
//     try {
//       await postRequest('/products', newProduct);
//       setProducts([...products, newProduct]); // Optimistically update the product list
//       setShowModal(false);
//       setProductName('');
//       setProductDescription('');
//       setProductAllergenInfo('');
//       setProductPrice('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong: {error}</p>;

//   return (
//     <div className="product-list">
//       <button onClick={() => setShowModal(true)}>Add Product</button>
//       {showModal && (
//         <div className="modal">
//           <h2>Add Product</h2>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <textarea
//             placeholder="Product Description"
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Product Allergen Info"
//             value={productAllergenInfo}
//             onChange={(e) => setProductAllergenInfo(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//           <button onClick={handleAddProduct}>Add</button>
//         </div>
//       )}
//       <div className="grid">
//         {products
//           .sort((a, b) => a.price - b.price)
//           .map((product) => (
//             <div key={product.id} className="product-card">
//               <Link to={`/products/${product.id}`}>
//                 <img src={product.productImage} alt={product.name} />
//                 <h3>{product.name}</h3>
//                 <p>Price: ${product.price}</p>
//               </Link>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

//                                            main working                                **************************************************************************
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { postRequest } from '../axios';
// import './ProductList.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productAllergenInfo, setProductAllergenInfo] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('https://frontend-assessment-server.onrender.com/api/products');
//       const data = await res.json();
//       setProducts(data || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddProduct = async () => {
//     const newProduct = {
//       name: productName,
//       description: productDescription,
//       allergen_info: productAllergenInfo,
//       selling_price: productPrice,
//     };
//     try {
//       await postRequest('/products', newProduct);
//       setProducts([...products, newProduct]); // Optimistically update the product list
//       setShowModal(false);
//       setProductName('');
//       setProductDescription('');
//       setProductAllergenInfo('');
//       setProductPrice('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong: {error}</p>;

//   return (
//     <div className="product-list">
//       <button onClick={() => setShowModal(true)}>Add Product</button>
//       {showModal && (
//         <div className="modal">
//           <h2>Add Product</h2>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <textarea
//             placeholder="Product Description"
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Product Allergen Info"
//             value={productAllergenInfo}
//             onChange={(e) => setProductAllergenInfo(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//           <button onClick={handleAddProduct}>Add</button>
//         </div>
//       )}
//       <div className="grid">
//         {products
//           .sort((a, b) => a.selling_price - b.selling_price)
//           .map((product) => (
//             <div key={product.id} className="product-card">
//               <Link to={`/products/${product.id}`}>
//                 <img src={product.productImage} alt={product.name} />
//                 <h3>{product.name}</h3>
//                 <p>Price: ${product.selling_price}</p>
//               </Link>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { postRequest } from '../axios';
// import './ProductList.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productAllergenInfo, setProductAllergenInfo] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('https://frontend-assessment-server.onrender.com/api/products');
//       const data = await res.json();
//       setProducts(data || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddProduct = async () => {
//     const newProduct = {
//       name: productName,
//       description: productDescription,
//       allergen_info: productAllergenInfo,
//       selling_price: productPrice,
//     };
//     try {
//       const addedProduct = await postRequest('/products', newProduct); // Get the response with the ID
//       setProducts([...products, addedProduct]); // Add the product with the assigned ID
//       setShowModal(false);
//       setProductName('');
//       setProductDescription('');
//       setProductAllergenInfo('');
//       setProductPrice('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong: {error}</p>;

//   return (
//     <div className="product-list">
//       <button onClick={() => setShowModal(true)}>Add Product</button>
//       {showModal && (
//         <div className="modal">
//           <h2>Add Product</h2>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <textarea
//             placeholder="Product Description"
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//           ></textarea>
//           <input
//             type="text"
//             placeholder="Product Allergen Info"
//             value={productAllergenInfo}
//             onChange={(e) => setProductAllergenInfo(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//           <button onClick={handleAddProduct}>Add</button>
//         </div>
//       )}
//       <div className="grid">
//         {products
//           .sort((a, b) => a.selling_price - b.selling_price)
//           .map((product) => (
//             <div key={product.id} className="product-card">
//               <Link to={`/products/${product.id}`}>
//                 <img src={product.productImage} alt={product.name} />
//                 <h3>{product.name}</h3>
//                 <p>Price: ${product.selling_price}</p>
//               </Link>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postRequest } from '../axios';
import SkeletonCard from './SkeletonCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAllergenInfo, setProductAllergenInfo] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://frontend-assessment-server.onrender.com/api/products');
      const data = await res.json();
      setProducts(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    const newProduct = {
      name: productName,
      description: productDescription,
      allergen_info: productAllergenInfo,
      selling_price: productPrice,
    };
    try {
      await postRequest('/products', newProduct);
      setProducts([...products, newProduct]); // Optimistically update the product list
      setShowModal(false);
      setProductName('');
      setProductDescription('');
      setProductAllergenInfo('');
      setProductPrice('');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="product-list">
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p>Something went wrong: {error}</p>;

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
          <input
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add</button>
        </div>
      )}
      <div className="grid">
        {products
          .sort((a, b) => a.selling_price - b.selling_price)
          .map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.productImage} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.selling_price}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
