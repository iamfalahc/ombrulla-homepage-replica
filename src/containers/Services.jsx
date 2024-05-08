import React from 'react'
import serviceData from '../dummy-data/serviceData'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div>
      {serviceData.map((data,index)=>{
        return <ServiceCard data={data} key={data.id}
        />
      })}
    </div>
  )
}

export default Services
