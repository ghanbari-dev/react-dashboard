import { Box } from "@mui/material";
import React from "react";
import LineChartComponent from "../components/charts/LineChartComponent";
import StackedBar from "../components/charts/StackedBar";

type Props = {};

const Ecommerce = (props: Props) => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <Box className="bg-white h-44 rounded-xl w-full lg:w-56 p-8 pt-9 m-3"></Box>
        <div className="flex flex-wrap m-3 justify-center items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white md:w-56 p-4 pt-9 rounded-2xl"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="bg-white m-3 p-4 rounded-2xl md:w-780">
          <div>text</div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="h-[360px] w-80 bg-white">
              <LineChartComponent />
            </div>
            <div className="h-[360px] w-80 bg-white">
              <StackedBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
