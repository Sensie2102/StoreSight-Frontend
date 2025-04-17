import React, { useEffect, useState } from "react";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import ChartComponent from "../components/ChartComponent";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const Dashboard = () => {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch("http://localhost:8000/analytics/kpis", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        setKpis(result);
      } catch (err) {
        console.error("Error fetching KPIs:", err);
      }
    };

    fetchKpis();
  }, []);

  if (!kpis) return <div className="p-4 text-gray-500">Loading KPIs...</div>;

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${kpis.total_revenue.toLocaleString()}</div>
            <p className="text-xs text-gray-500">Avg. Order: ${kpis.avg_customer_order.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Order Volume</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{kpis.order_volume.toLocaleString()}</div>
            <p className="text-xs text-gray-500">Total Orders Processed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Top Customer</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">
              {kpis.customer_spending?.[0]?.customer_id ?? "-"}
            </div>
            <p className="text-xs text-gray-500">
              Spent: ${kpis.customer_spending?.[0]?.total_spent.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Most Orders</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-md font-bold">
              {kpis.orders_per_customer?.[0]?.customer_id ?? "-"}
            </div>
            <p className="text-xs text-gray-500">
              Orders: {kpis.orders_per_customer?.[0]?.order_count}
            </p>
          </CardContent>
        </Card>
      </div>

      <ChartComponent />
    </div>
  );
};

export default Dashboard;
