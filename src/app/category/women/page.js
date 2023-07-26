"use client"

import ProductCard from '@/components/productCard/ProductCard';

import React, { useEffect, useState } from 'react'

const Women = () => {
    const [allProducts, setAllProducts] = useState([]);
    const fetchProducts = async () => {
      const response = await fetch(`/api/product/women`);
      const data = await response.json();
      console.log(data)
      setAllProducts(data);
    };
  
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(allProducts);
  return (
   <div className='flex justify-center items-center gap-5 mt-8 flex-wrap'>
    {
        allProducts?.map(product=><ProductCard  key={product._id} product={product}></ProductCard>)
    }
   </div>
  )
}

export default Women