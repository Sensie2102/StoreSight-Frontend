import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log("Dashboard component mounted");
    return () => {
      console.log("Dashboard component unmounted");
    };
  }, []);

  console.log("Dashboard component rendering");

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>You are successfully logged in!</p>
    </div>
  );
};

export default Dashboard;
