// import { useState, useEffect } from "react";
// import axios from "../axios";

// const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(url, options);
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, options]);

//   return { data, loading, error };
// };

// export default useFetch;


// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const useFetch = (url, options) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios(url, options);
//       setData(response.data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [url, options]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return { data, loading, error };
// };

// export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://frontend-assessment-server.onrender.com/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;

