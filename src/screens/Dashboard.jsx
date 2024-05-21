// import React, { useState, useMemo } from "react";
// import useFetch from "../hooks/useFetch";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const { data: products, loading, error } = useFetch("/dashboard");
//   const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });

  // it not working for id other two are fine ********************************

  // const sortedProducts = useMemo(() => {
  //   if (!products) return [];
  //   const sortableProducts = [...products];
  //   sortableProducts.sort((a, b) => {
  //     if (a[sortConfig.key] < b[sortConfig.key]) {
  //       return sortConfig.direction === "ascending" ? -1 : 1;
  //     }
  //     if (a[sortConfig.key] > b[sortConfig.key]) {
  //       return sortConfig.direction === "ascending" ? 1 : -1;
  //     }
  //     return 0;
  //   });
  //   return sortableProducts;
  // }, [products, sortConfig]);

//  it only work for id *************************************

  // const sortedProducts = useMemo(() => {
  //   if (!products) return [];
  //   const sortableProducts = [...products];
  //   sortableProducts.sort((a, b) => {
  //     // Convert id strings to numbers for comparison
  //     const idA = parseInt(a.id);
  //     const idB = parseInt(b.id);
  
  //     if (idA < idB) {
  //       return sortConfig.direction === "ascending" ? -1 : 1;
  //     }
  //     if (idA > idB) {
  //       return sortConfig.direction === "ascending" ? 1 : -1;
  //     }
  //     return 0;
  //   });
  //   return sortableProducts;
  // }, [products, sortConfig]);

//   const sortedProducts = useMemo(() => {
//     if (!products) return [];
//     const sortableProducts = [...products];
//     sortableProducts.sort((a, b) => {
//       const valueA = a[sortConfig.key];
//       const valueB = b[sortConfig.key];
  
//       // Check if the values are numbers
//       if (!isNaN(valueA) && !isNaN(valueB)) {
//         // If both values are numbers, compare them directly
//         return sortConfig.direction === "ascending" ? valueA - valueB : valueB - valueA;
//       } else {
//         // If one or both values are not numbers, convert them to strings and compare
//         const stringA = String(valueA).toLowerCase();
//         const stringB = String(valueB).toLowerCase();
//         if (stringA < stringB) {
//           return sortConfig.direction === "ascending" ? -1 : 1;
//         }
//         if (stringA > stringB) {
//           return sortConfig.direction === "ascending" ? 1 : -1;
//         }
//         return 0;
//       }
//     });
//     return sortableProducts;
//   }, [products, sortConfig]);

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="dashboard">
//       <h1>Product Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => requestSort("id")}>ID</th>
//             <th onClick={() => requestSort("name")}>Name</th>
//             <th onClick={() => requestSort("selling_price")}>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedProducts.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.selling_price}</td>
//               <td>
//                 <button onClick={() => console.log("Check", product.id)}>Check</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;







//      check with buttons

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
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      // Check if the values are numbers
      if (!isNaN(valueA) && !isNaN(valueB)) {
        // If both values are numbers, compare them directly
        return sortConfig.direction === "ascending" ? valueA - valueB : valueB - valueA;
      } else {
        // If one or both values are not numbers, convert them to strings and compare
        const stringA = String(valueA).toLowerCase();
        const stringB = String(valueB).toLowerCase();
        if (stringA < stringB) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (stringA > stringB) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      }
    });

    return sortableProducts;
  }, [products, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("id")}>
              ID {sortConfig.key === "id" && <span>{sortConfig.direction === "ascending" ? "⬆️" : "⬇️"}</span>}
            </th>
            <th onClick={() => requestSort("name")}>
              Name {sortConfig.key === "name" && <span>{sortConfig.direction === "ascending" ? "⬆️" : "⬇️"}</span>}
            </th>
            <th onClick={() => requestSort("selling_price")}>
              Price {sortConfig.key === "selling_price" && <span>{sortConfig.direction === "ascending" ? "⬆️" : "⬇️"}</span>}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.selling_price}</td>
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























