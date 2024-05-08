import React from "react";
import Title from "./Title";
import Button from "./Button";
import LinkButton from "./LinkButton";

const ServiceCard = ({ data }) => {
  return (
    <div className="flex px-8">
      <section className="flex flex-col gap-4 mb-14">
        <Title title={data.heading} />
        <h2 className="text-4xl font-normal leading-snug">{data.title}</h2>
        <span className="text-gray-500">{data.description}</span>
        <ul>
          {data.descriptionList.map((listItem, index) => (
            <li className="list-disc text-gray-500" key={index}>{listItem}</li>
          ))}
        </ul>
        <div className="flex">
          <Button />
          <LinkButton />
        </div>
      </section>
      <section className="hidden">
     <img src={data.image} alt="service-image" />
      </section>
    </div>
  );
};

export default ServiceCard;
