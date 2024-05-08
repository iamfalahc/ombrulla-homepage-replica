import React from "react";
import PlayButton from "../components/PlayButton";
import PlayButtonSmall from "../components/PlayButtonSmall";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Empowerment = () => {
  return (
    <div className="px-4 py-2 xl:px-24">
      <div className="flex justify-center items-center bg-slate-200 px-3 py-6 rounded-3xl xl:px-48 xl:py-16 ">
        <div className="pl-2 pt-3 pb-3 flex flex-col gap-y-4 ">
     <Title title={"Leader in AI visual inspection"}/>
          <h2 className="text-2xl font-semibold leading-8 xl:text-6xl xl:leading-tight">
            Crafting Tomorrow's World with
            <span className="text-2xl font-semibold text-blue-600 xl:text-6xl">
              {" "}
              AI Excellence{" "}
            </span>
          </h2>

          <span className="leading-7 text-gray-500 ">
            Leveraging AI, Ombrulla empowers clients with data-driven insights
            and automation, extracting valuable information from various sources
            like photos, videos, and data lakes. Our AI visual inspection system
            enables businesses to enhance their bottom line through precise
            defect detection and actionable insights.
          </span>
          <Link>
            <PlayButtonSmall buttonText={"Watch Corporate Video"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Empowerment;
