import React from 'react'
import serviceData from '../dummy-data/serviceData'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div>
      {serviceData.map((data)=>{
        return <ServiceCard data={data}
        />
      })}
    </div>
  )
}

export default Services
