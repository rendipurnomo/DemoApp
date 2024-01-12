import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="grid grid-cols-4 gap-2 my-16 text-white">
      <Link
        to="/shop/food"
        className='col-span-2 rounded-lg h-24 md:h-48 bg-[url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-cover flex justify-center items-center'>
        <h1 className="hover:scale-125 transition-all duration-300 ease-in-out md:text-3xl border-2 border-white px-2 py-1 bg-white/20 backdrop-blur-lg rounded-md">
          Food
        </h1>
      </Link>
      <Link
        to="/shop/fashion"
        className='rounded-lg bg-[url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover flex justify-center items-center'>
        <h1 className="hover:scale-125 transition-all duration-300 ease-in-out md:text-3xl border-2 border-white px-2 py-1 bg-white/20 backdrop-blur-lg rounded-md">
          Fashion
        </h1>
      </Link>
      <Link
        to="/shop/furniture"
        className='row-span-2 rounded-lg bg-[url("https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover flex justify-center items-center'>
        <h1 className="hover:scale-125 transition-all duration-300 ease-in-out md:text-3xl border-2 border-white px-2 py-1 bg-white/20 backdrop-blur-lg rounded-md">
          Furniture
        </h1>
      </Link>
      <Link
        to="/shop/electronic"
        className='col-span-3 rounded-lg h-36 bg-[url("https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center flex justify-center items-center'>
        <h1 className="hover:scale-125 transition-all duration-300 ease-in-out md:text-3xl border-2 border-white px-2 py-1 bg-white/20 backdrop-blur-lg rounded-md">
          Electronic
        </h1>
      </Link>
    </div>
  );
}

export default Categories