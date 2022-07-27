import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "../src/store"
import { Provider } from "react-redux"
import FilterProducts from './components/FilterProducts';
import CartDetails from './components/CartDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from './components/NavbarHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path = "/productDetails"  element = {<FilterProducts />}/>
        <Route path="/cartDetails" element={<CartDetails />} />
      </Routes>
    </Router>

  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
