import React from 'react';
import Flickity from 'react-flickity-component';
import { useAllProduct } from './useAllProduct';
import Card from '../../components/Product/Card';

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
  groupCells: true,
}

const Product = () => {
  const {isLoading, error, products} = useAllProduct();

  console.log(products)
  return (
    <div className='px-4 md:px-14 mt-4'>
      <div className='flex flex-col gap-4 items-start mb-8'> 
      <h1 className='text-2xl md:text-3xl font-bold'>Traktiran pengguna baru</h1>
      <Link className='text-primary hover:underline' to='/products'>Lihat semua</Link>
      </div>
      {isLoading && <p>Loading...</p>}
      {products && (
        <div className='py-4'>
          <Flickity
            className="carousel"
            options={flickityOptions}
            elementType='div'
            reloadOnUpdate
            static
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
            </Flickity>
        </div>
      )}
    </div>
  )
}

export default Product