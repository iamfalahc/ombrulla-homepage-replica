import React from "react";

const PlayButton = ({ buttonText }) => {
  return (
    <div className=" flex items-center">
      <button className="button-primary rounded-full px-3.5 py-3.5 xl:px-3.5 xl:py-3.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ffffff"
          aria-hidden="true"
          className="h-6 w-6 xl:h-7 xl:w-7"
          data-astro-cid-ehvcvm4h="true"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
        </svg>
      </button>
      <span className="hidden xl:block pl-4 xl:font-medium"> {buttonText}</span>
    </div>
  );
};

export default PlayButton;
