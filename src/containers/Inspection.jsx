import React from "react";
import Button from "../components/Button";
import "./container.css"

import LinkButton from "../components/LinkButton";
import PlayButton from "../components/PlayButton";

const Inspection = () => {
  return (
    <div className="px-24 flex mt-8 justify-between">
      <section className="flex flex-col w-2/4 justify-center gap-8">
        <div className="">
          <h4 className="text-6xl font-albert-sans font-bold">
            Manual
            <br />
            Inspection is
            <br />
          </h4>
          <span className="text-6xl font-albert-san font-medium text-blue-600">
            Slow& Error-Prone
          </span>
        </div>

        <div className=" text-gray-500 font-albert-sans">
          AI-powered visual inspection, leveraging computer vision, transforms
          manufacturing inspection procedures, boosting precision and
          cost-effectiveness while upholding product excellence. This AI
          inspection system detects defects with exceptional accuracy,
          optimizing the overall inspection process.
        </div>
        <div className="flex gap-10">
          <Button />
        <PlayButton buttonText={<span>Watch video</span>}/>
        </div>
      </section>
      <section className="">
        <img
          className="object-cover banner-img"
          src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
          alt=""
        />
      </section>
    </div>
  );
};

export default Inspection;
