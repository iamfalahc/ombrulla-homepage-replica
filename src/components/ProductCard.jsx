import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
      <h2 className='xl:'>{data.title}</h2>
      <span>{data.description}</span>
      <img src={data.image} alt="" />
    </div>
  )
}

export default ProductCard
