import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Area,
  AreaChart,
  ComposedChart,
} from "recharts";


const initialData = [
  { name: "Jan", revenue: 400, users: 240, transactions: 100 },
  { name: "Feb", revenue: 300, users: 139, transactions: 80 },
  { name: "Mar", revenue: 600, users: 380, transactions: 150 },
  { name: "Apr", revenue: 800, users: 520, transactions: 180 },
  { name: "May", revenue: 500, users: 380, transactions: 120 },
  { name: "Jun", revenue: 900, users: 620, transactions: 220 },
  { name: "Jul", revenue: 700, users: 510, transactions: 170 },
];

const ChartComponent = () => {
  const [data, setData] = useState(initialData);
  const [chartType, setChartType] = useState("bar");

  // Simulate dynamic data update
  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) =>
        currentData.map((item) => ({
          ...item,
          revenue: Math.max(100, item.revenue + Math.floor(Math.random() * 100) - 50),
          users: Math.max(50, item.users + Math.floor(Math.random() * 50) - 25),
          transactions: Math.max(30, item.transactions + Math.floor(Math.random() * 30) - 15),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            <Line type="monotone" dataKey="transactions" stroke="#ffc658" />
          </LineChart>
        );
      case "area":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="users" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="transactions" stackId="3" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        );
      case "composed":
        return (
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            <Area type="monotone" dataKey="transactions" fill="#ffc658" stroke="#ffc658" />
          </ComposedChart>
        );
      default:
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="users" fill="#82ca9d" />
            <Bar dataKey="transactions" fill="#ffc658" />
          </BarChart>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Monthly Performance</CardTitle>
        <div className="flex gap-2">
          {["bar", "line", "area", "composed"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-3 py-1 text-sm rounded ${
                chartType === type ? "bg-gray-200" : "bg-gray-100"
              }`}
            >
              {type === "composed" ? "Mixed" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
