import Card from "../ui/card/card";
import Chart from "../ui/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/transactions/transactions";

export const metadata = {
  title: " Dashboard",
  description: "Dashboard description",
};

const Dashboardpage = () => {
  return (
    <div className="h-fit  grid grid-flow-col gap-3">
      <h1>Mark</h1>
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
