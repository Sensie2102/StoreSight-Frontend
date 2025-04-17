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

const ChartComponent = () => {
  const [chartType, setChartType] = useState("bar");
  const [freq, setFreq] = useState("W");
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [offset, setOffset] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const isTest = true;
  useEffect(() => {
    let past, today;

    if (isTest) {
      past = new Date("2018-01-01");
      today = new Date("2018-04-01");
    } else {
      today = new Date();
      past = new Date();

      if (freq === "W") {
        past.setDate(today.getDate() - 7 * limit);
      } else {
        past.setMonth(today.getMonth() - limit);
      }
    }

    setStartDate(past.toISOString().split("T")[0]);
    setEndDate(today.toISOString().split("T")[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freq, limit]);

  useEffect(() => {
    const fetchData = async () => {
      if (!startDate || !endDate) return;

      try {
        const token = localStorage.getItem("access_token");
        const params = new URLSearchParams({
          freq,
          offset: offset.toString(),
          limit: limit.toString(),
          start_date: startDate,
          end_date: endDate,
        });

        const response = await fetch(`http://localhost:8000/analytics/revenue_batch?${params}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        const formatted = result.data.map(item => ({
          ...item,
          name: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        }));
        console.log("Formatted data:", formatted); // Debugging line
        setData(formatted);
      } catch (err) {
        console.error("Error fetching revenue batch data:", err);
      }
    };

    fetchData();
  }, [freq, offset, limit, startDate, endDate]);

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
            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
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
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
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
          </BarChart>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Revenue (Batched)</CardTitle>
        <div className="flex gap-2">
          <button
            onClick={() => setFreq(freq === "W" ? "M" : "W")}
            className="px-2 py-1 text-xs rounded bg-blue-200"
          >
            {freq === "W" ? "Weekly" : "Monthly"}
          </button>
          {["bar", "line", "area", "composed"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-2 py-1 text-xs rounded ${chartType === type ? "bg-green-300" : "bg-gray-100"
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
