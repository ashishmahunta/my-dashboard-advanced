
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Compliant", value: 60, color: "#4caf50" },
  { name: "Non-compliant", value: 40, color: "#f44336" },
];

const DashboardPage = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>CSPM Executive Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        <div style={cardStyle}>
          <h2>Cloud Accounts Assessed</h2>
          <p>75% - 2 accounts</p>
        </div>
        <div style={cardStyle}>
          <h2>Cloud Accounts Assessed</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie dataKey="value" data={pieData} cx="50%" cy="50%" outerRadius={60}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={cardStyle}>
          <h2>Registry Items</h2>
          <p>7 Low, 0 High</p>
        </div>
        <div style={cardStyle}>
          <h2>Image Security Issues</h2>
          <p>3 Low, 0 High</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default DashboardPage;
