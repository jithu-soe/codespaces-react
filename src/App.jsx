import './App.css';
import AppRouter from "./AppRouter";
function App() {
  return (
    <div className="App">
       <AppRouter />
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProductList from './ProductList';
// import ProductDetails from './ProductDetails';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={ProductList} />
//         <Route path="/products/:id" component={ProductDetails} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

