import React from "react";
import Navbar from "../components/Navbar";
import Inspection from "../containers/Inspection";
import Empowerment from "../containers/Empowerment";
import Services from "../containers/Services";
import Products from "../containers/Products";

const Home = () => {
  return (
    <div>
     <Inspection/>
     <Empowerment/>
     <Services/>
     <Products/>
     
    </div>
  );
};

export default Home;
