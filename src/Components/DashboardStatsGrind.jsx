import React from "react";
import { FcBusinessman, FcPieChart } from "react-icons/fc";
import { IoBagHandle } from "react-icons/io5";
import {BsCartFill} from "react-icons/bs"

export default function DashboardStatsGrind() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full bg-sky-500 h-12 w-12 flex items-center justify-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3458.50
            </strong>
            <span className="text-sm text-green-500 pl-2">+246</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full bg-sky-100 h-12 w-12 flex items-center justify-center">
          <FcPieChart className="text-6xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Expenses</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3458.50
            </strong>
            <span className="text-sm text-green-500 pl-2">-246</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full bg-sky-100 h-12 w-12 flex items-center justify-center">
          <FcBusinessman className="text-4xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
            12375
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full bg-sky-500 h-12 w-12 flex items-center justify-center">
          <BsCartFill className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3458.50
            </strong>
            <span className="text-sm text-green-500 pl-2">+246</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className=" mt-5 ml-2 bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
      {children}
    </div>
  );
}
