import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="super-quality"
      className="flex 
    justify-between items-center gap-10 
    max-lg:flex-col w-full max-container max-sm"
    >
      <div className="flex flex-col flex-1 ">
        <h2
          className=" font-palanquin capitalize text-4xl  
        font-bold lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red ">Super</span>
          <br />
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-start ">
        <img
          className="object-contain"
          src={shoe8}
          alt=" super quality shoe"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
