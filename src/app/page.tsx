import React from "react";
import Image from "next/image";
import StockInfo from "./components/stockinfo";
import featuredCompanies from "../../public/feaured";

export default function Home() {
  return (
    <div className=" ">
      <StockInfo />
      <div className=" flex flex-col w-full   p-0 ">
        <p className="mx-5 text-red-500 text-2xl font-bold">
          FEATURED CONPANIES
        </p>
        <div className="flex gap-2 bg-[#87CEEB] p-10  ">
          {/* Add your featured companies here */}
          {featuredCompanies.map((company, index) => (
            <div key={index} className="flex items-center  ">
              <img src={company.logo} className="w-50 h-30 mr-4" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 h-screen bg-gray-200"></div>
        <div className="w-1/3 h-screen bg-gray-300">Middle Content</div>
        <div className="w-1/3 h-screen bg-gray-400">Right Content</div>
      </div>
    </div>
  );
}
