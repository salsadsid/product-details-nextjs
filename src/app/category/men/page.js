"use client"

import React, { useEffect, useState } from 'react'

const Men = () => {
    const [allProducts, setAllProducts] = useState([]);
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const data = await response.json();
      console.log(data)
      setAllProducts(data);
    };
  
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(allProducts);
  return (
    <div>Men</div>
  )
}

export default Men