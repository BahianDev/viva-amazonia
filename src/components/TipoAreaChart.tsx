"use client";
import Image from "next/image";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "RL", value: 15, fill: "#C3EBFA" },
  { name: "UAS", value: 4, fill: "#FAE27C" },
  { name: "C", value: 1, fill: "#CFCEFF" },
];

const TipoAreaChart = () => {
  return (
    <div className="rounded-md h-64 relative flex flex-col justify-center items-center">
      <div className="flex gap-4">
        <div
          className={`bg-[#C3EBFA] w-16 rounded-2xl flex items-center justify-center`}
        >
          <span>RL</span>
        </div>
        <div
          className={`bg-[#FAE27C] w-16 rounded-2xl flex items-center justify-center`}
        >
          <span>UAS</span>
        </div>
        <div
          className={`bg-[#CFCEFF] w-16 rounded-2xl flex items-center justify-center`}
        >
          <span>C</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">20</h1>
      </div>
    </div>
  );
};

export default TipoAreaChart;
