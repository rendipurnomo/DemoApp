import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
      <img className='aspect-square w-full object-contain object-center bg-white rounded-t-xl' src={product.image} alt={product.title}/>
      <h3 className='text-sm font-semibold'>{product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}</h3>
      <p>Rp. {product.price}</p>
      <p>⭐ {product.rating.rate}</p>
    </Link>
  )
}

export default Card