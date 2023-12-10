import React, { useEffect, useState, useMemo } from "react";
import Header from "./Header";
import Links from "./Links";
import Home from "./AppComponents/Main";
import About from "./AppComponents/Shop";
import Contact from "./AppComponents/Contact";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation, BrowserRouter, Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./App.css";
// import MainComponents from "./MainComponents";
import Shop from "./AppComponents/Shop";
import Blog from "./AppComponents/Blog";
import Login from "./AppComponents/login";
import SignUP from "./AppComponents/Signup";
import MYAccount from "./AppComponents/MyAccount";
import Cart from "./AppComponents/Cart";
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainDisplay from "./AppComponents/Main";
import Products from "./AppComponents/Products";
function App() {
  // const shouldRenderMainComponents = location.pathname === '/shop';
  const [shouldRenderMainComponents, setShouldRenderMainComponents] = useState(false);

  useEffect(() => {

    document.body.style.backgroundColor = "#f8d4bd"
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      setShouldRenderMainComponents(true);
    } else {
      window.location.href = '/'; // Redirect to the home page for any other path
    }
  }, []);
  return (
    <>
      <div className="checkGrid">
        <div className="header">
          <Header />
        </div>
        {/* { 
          shouldRenderMainComponents && <MainComponents/>
        } */}
        <Outlet />
      </div>
    </>

  );
}

export default App;


