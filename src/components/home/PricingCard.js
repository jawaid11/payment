import React from "react";
import { SlBookOpen,SlClock,SlScreenDesktop } from "react-icons/sl";
import {FcGraduationCap} from "react-icons/fc";
import { RiAdvertisementLine} from 'react-icons/ri';

const PricingCard = () => {
  return (
    <div className=" text-white rounded-md p-6">
      <h2 className="text-3xl font-bold">Access curated courses worth</h2>
      <div className="flex items-center mt-4">
        <span className="text-4xl font-bold line-through">₹ 18,500</span>
        <span className="text-4xl text-blue-500 ml-2 ">₹ 99</span>
        <span className="text-xl font-bold text-white ml-2">per year!</span>
      </div>
      <ul className="mt-6 space-y-2 text-gray-800 text-xl">
        <li className="flex items-center">
          <SlBookOpen className="text-white mx-3"/>
          <span className="text-blue-500 mx-1">100+</span>
          <span className=" text-white">Job relevant courses</span>
        </li>
        <li className="flex items-center">
        <SlClock className="text-white mx-3"/>
          <span className="text-blue-500 mx-1">20,000+</span>
          <span className=" text-white">Hours of content</span>
        </li>
        <li className="flex items-center">
         <SlScreenDesktop className="text-white mx-3"/>
          <span className="text-blue-500 mx-1">Exclusive</span>
          <span className=" text-white">webinar access</span>
        </li>
        <li className="flex items-center">
        <FcGraduationCap className="text-white mx-3" />
          <span className=" text-white mx-1">Scholarship worth</span>
          <span className="text-blue-500 mx-1">₹94,500</span>

        </li>
        <li className="flex items-center">
       <RiAdvertisementLine className="text-white mx-3" />
          <span className="text-blue-500 mx-1">ADS Ad</span>
          <span className=" text-white">Free learning experience</span>

        </li>
      </ul>
    </div>
  );
};

export default PricingCard;
