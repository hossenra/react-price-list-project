import React from "react";
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

const DashBoard = () => {
  const studentMarks = [
    { id: 1, name: "Student 1", math: 85, physics: 90, chemistry: 78 },
    { id: 2, name: "Student 2", math: 78, physics: 88, chemistry: 92 },
    { id: 3, name: "Student 3", math: 92, physics: 85, chemistry: 80 },
    { id: 4, name: "Student 4", math: 75, physics: 95, chemistry: 88 },
    { id: 5, name: "Student 5", math: 88, physics: 82, chemistry: 91 },
    { id: 6, name: "Student 6", math: 96, physics: 89, chemistry: 77 },
    { id: 7, name: "Student 7", math: 81, physics: 93, chemistry: 85 },
    { id: 8, name: "Student 8", math: 90, physics: 84, chemistry: 89 },
    { id: 9, name: "Student 9", math: 87, physics: 91, chemistry: 83 },
    { id: 10, name: "Student 10", math: 89, physics: 94, chemistry: 87 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={studentMarks}>
        <Line dataKey={"physics"}></Line>
        <Line stroke="#8884d8" dataKey={"math"}></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default DashBoard;
