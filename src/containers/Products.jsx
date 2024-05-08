import React from "react";
import Title from "../components/Title";
import productData from "../dummy-data/productData"
import ProductCard from "../components/ProductCard";
const Products = () => {
  return (

<div className="xl:px-24 xl:w-1/3 xl:flex xl:justify-between xl:w-full xl:gap-20">
      <section className="xl:w-1/3">
        <Title title={"PRODUCTS"} />
        <h2 className="xl:text-5xl xl:font-semibold xl:leading-tight">
          Tracking Tools
        </h2>
        <span>
          AI and IoT-enabled tracking tools enhance workplace safety by
          providing real-time monitoring of workers' movements and vital signs.
          Simultaneously, they contribute to environmental sustainability by
          optimizing energy usage, improving waste management, and promoting
          resource efficiency.
        </span>
      </section>
      <section className="xl:flex xl:w-2/3 xl:gap-20">
        {productData.map((data)=>{
           return <div><ProductCard data={data}/></div>
        })}
      </section>
  
    </div>

  );
};

export default Products;
