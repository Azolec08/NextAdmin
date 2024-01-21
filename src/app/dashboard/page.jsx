import React from "react";
import Card from "../ui/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/transactions/transactions";
import Chart from "../ui/chart/chart";

export const metadata = {
  title: " Dashboard",
  description: "Dashboard description",
};

const Dashboardpage = () => {
  return (
    <div className="h-fit  grid grid-flow-col gap-3">
      <div className="flex flex-col gap-y-3">
        <div className="flex w-full gap-2">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className=" ">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboardpage;
