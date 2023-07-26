import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({product}) => {
    const{images,name,price,_id,category}=product
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className='flex justify-center items-center'>
        <img class="p-8 max-h-72 rounded-t-lg" src={images[2]} alt="product image" />
    </div>
 
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
      
        <div class="flex items-center justify-between mt-5">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">৳ {price}</span>
            <Link href={`/category/${category}/${_id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
        </div>
    </div>
</div>
  )
}

export default ProductCard