"use client";
import ProductCard from "@/components/productCard/ProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Categories = () => {
  const [allProducts, setAllProducts] = useState([]);
  const path= usePathname()
  const fetchProducts = async () => {
    const response = await fetch(`/api/product`);
    const data = await response.json();
    console.log(data);
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(allProducts);
  return (
    <div>
      
      <div className="flex justify-center items-center gap-5 mt-8 flex-wrap">
        {allProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
