import React from "react";
import Title from "./Title";
import Button from "./Button";
import LinkButton from "./LinkButton";

const ServiceCard = ({ data, }) => {
  const isEvenId = data.id % 2 === 0;
  return (
    <div className={`flex px-8 xl:px-24 ${isEvenId? 'flex-row-reverse' : ''}`}>
      <section className="flex flex-col gap-4 mb-14 xl:w-2/4 xl:mb-24">
        <Title title={data.heading} />
        <h2 className="text-4xl font-normal leading-snug xl:text-5xl xl:font-normal xl:leading-tight">{data.title}</h2>
        <span className="text-gray-500">{data.description}</span>
        <ul>
          {data.descriptionList.map((listItem, index) => (
            <li className="list-disc text-gray-500 xl:ml-10" key={index}>{listItem}</li>
          ))}
        </ul>
        <div className="flex">
          <Button />
          <LinkButton />
        </div>
      </section>
      <section className="hidden xl:block xl:w-2/4 xl:flex">
        <img className={`xl:w-4/5 xl:h-96 xl:ml-20 xl:rounded-xl xl:object-cover mt-10  ${isEvenId? ' xl:ml-0 xl:mt-20' : ''}` }src={data.image} alt="service-image" />
      </section>
    </div>
  );
};

export default ServiceCard;
