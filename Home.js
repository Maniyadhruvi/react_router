import React, { useEffect, useState } from 'react';
// import { Button, navbar, container, nav, navDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import Header from './Header';
import Products from "./Products";

export default function Home() {
  const [products, setProducts] = useState("")

  
  useEffect(() => {
    getProducts()

  }, [products])

  const getProducts = () => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }



  return (
    <>

      <div className="container">
        <div className="row mt-5">
          {
            products && products.map((p) =>
              <Products title={p.title} id={p.id} price={p.price} />

            )
          }
        </div>
      </div>
    </>

  );
}

