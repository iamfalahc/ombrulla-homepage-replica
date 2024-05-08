import React from 'react'
import customerData from '../dummy-data/customerData'
import CustomerCard from '../components/CustomerCard'
import Title from '../components/Title'

const Customers = () => {
  return (
    <div className='flex flex-col px-8 mb-14 gap-4 xl:px-24 xl:gap-24'>
       <div className='flex flex-col items-center gap-2'>
       <Title title={"OUR CUSTOMERS"}/>
       <h2 className='text-2xl font-medium xl:text-6xl'>They Trust Us</h2>
       </div>
       <div  className='flex flex-wrap xl:flex-no-wrap justify-between xl:gap-20'>
      {customerData.map((data,index)=>{
        return <CustomerCard data={data} key={data.id}/>
      })}</div>
    </div>
  )
}

export default Customers
