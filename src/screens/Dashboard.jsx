import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import "./Dashboard.css";

const Dashboard = () => {
  const { data: products, loading, error } = useFetch("/dashboard");
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const sortableProducts = [...products];
    sortableProducts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortableProducts;
  }, [products, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("id")}>ID</th>
            <th onClick={() => requestSort("name")}>Name</th>
            <th onClick={() => requestSort("price")}>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => console.log("Check", product.id)}>Check</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
