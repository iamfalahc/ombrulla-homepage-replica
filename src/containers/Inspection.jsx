import React from "react";
import Button from "../components/Button";

const Inspection = () => {
  return (
    <div className="px-24 flex">
      <section className="flex flex-col gap-y-0 md:w-1/2 md:gap-y-0">
        <div>
          <h4 className="text-6xl font-albert-sans font-bold">
            Manual
            <br />
            Inspection is
            <br />
          </h4>
          <span className="text-6xl font-albert-san font-semibold">Slow& Error-Prone</span>
        </div>

        <div className="md:text-lg text-6xl leading-normal text-gray-500 font-albert-sans mb-36 md:mb-8">
          AI-powered visual inspection, leveraging computer vision, transforms
          manufacturing inspection procedures, boosting precision and
          cost-effectiveness while upholding product excellence. This AI
          inspection system detects defects with exceptional accuracy,
          optimizing the overall inspection process.
        </div>
        <div>
          <Button/>
        </div>
      </section>
      <section>
        <img className="" src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="" />
      </section>
    </div>
  );
};

export default Inspection;
