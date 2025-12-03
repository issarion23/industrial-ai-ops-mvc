import React from "react";

export default function StatCard({ title, value, change, icon }) {
  const isPositive = change && change.startsWith('+');
  const changeColor = isPositive ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col">
      <div className="flex justify-between items-start">
        <h3 className="text-gray-400 text-sm font-medium uppercase">{title}</h3>
        <div className="text-blue-400">{icon}</div>
      </div>
      <p className="text-3xl font-semibold text-white mt-2">{value}</p>
      {change && <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>}
    </div>
  );
}
