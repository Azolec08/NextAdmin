"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Tuesday",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Wednesday",
    visit: 2000,
    click: 9800,
  },
  {
    name: "Thursday",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Friday",
    viit: 1890,
    click: 4800,
  },
  {
    name: "Saturday",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sunday",
    viit: 3490,
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className="h-[80vh] bg-slate-700 p-2">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "black", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
