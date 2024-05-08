import React from 'react'
import LinkButton from './LinkButton'

const ProductCard = ({data}) => {
  return (
    <div className='flex flex-col gap-y-8 bg-slate-100 xl:px-10 xl:py-10 rounded-2xl px-6 py-6 '>
    <h2 className='xl:text-2xl font-normal'>{data.title}</h2>
    <span className='text-gray-500'>{data.description}</span>
    <img src={data.image} alt="" className='w-32 mx-auto ' />
    <LinkButton/>
  </div>
  
  )
}

export default ProductCard
