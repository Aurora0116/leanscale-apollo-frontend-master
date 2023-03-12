import React from "react";

export default function SubHeader() {
  return (
    <div className="bg-gradient-1">
      <div className="container mx-auto flex justify-between items-center py-2">
        <nav>
          <ul className="flex items-center ">
            <li className="text-white font-callout font-semibold mr-6">
              All Categories
            </li>
            <li className="text-white font-callout font-semibold mr-6">
              Offers
            </li>
            <li className="text-white font-callout font-semibold mr-6">
              Prescriptions
            </li>
            <li className="text-white font-callout font-semibold mr-6">
              <button className="rounded-lg text-secondary bg-white px-2 py-1">
                LAKUM
              </button>
            </li>
          </ul>
        </nav>
        <div className="">
          <p className="text-white font-callout font-semibold">Winter Deals</p>
        </div>
      </div>
    </div>
  );
}
