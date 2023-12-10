import React from "react"
import { useEffect, useState } from "react"
// import { json } from "react-router-dom"
// import MainComponents from "../MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import MainDisplay from "./Main";
function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json); // Update the products state here
      });
  }, []);


  return (
    <>
        <MainDisplay />


    </>



  );
}

export default Products