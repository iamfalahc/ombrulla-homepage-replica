import React from "react";
import Navbar from "../components/Navbar";
import Inspection from "../containers/Inspection";
import Empowerment from "../containers/Empowerment";
import Services from "../containers/Services";

const Home = () => {
  return (
    <div>
     <Inspection/>
     <Empowerment/>
     <Services/>
     
    </div>
  );
};

export default Home;
