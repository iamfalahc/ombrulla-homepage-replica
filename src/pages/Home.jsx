import React from "react";
import Navbar from "../components/Navbar";
import Inspection from "../containers/Inspection";
import Empowerment from "../containers/Empowerment";
import Services from "../containers/Services";
import Products from "../containers/Products";
import Customers from "../containers/Customers";


const Home = () => {
  return (
    <div>
     <Inspection/>
     <Empowerment/>
     <Services/>
     <Products/>
     <Customers/>
     
     
    </div>
  );
};

export default Home;
