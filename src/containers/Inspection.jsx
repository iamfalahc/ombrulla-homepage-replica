import React from "react";
import Button from "../components/Button";
import "./container.css"
import PlayButton from "../components/PlayButton";
import bannerImage from "../images/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"

const Inspection = () => {
  return (
    <div className="px-8 xl:px-24 flex flex-col xl:flex-row xl:justify-between gap-y-16 bg-gradient-to-br from-gray-300 via-gray-200 to-blue-200">
      <section className="flex flex-col xl:w-2/4 justify-center gap-8">
        <div className="">
          <h4 className="xl:text-6xl text-5xl leading-tight font-albert-sans font-bold">
            Manual
            <br />
            Inspection is
            <br />
          </h4>
          <span className="xl:text-6xl text-5xl leading-tight font-albert-san font-medium text-blue-600">
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
        <div className="flex gap-4 xl:gap-10">
          <Button />
        <PlayButton buttonText={<span>Watch video</span>}/>
        </div>
      </section>
      <section className="m-auto">
        <img
          className="object-cover banner-img mb-16"
          src={bannerImage}
          alt="banner-image"
        />
      </section>
    </div>
  );
};

export default Inspection;
