import React from "react";

export default function SimpleChart({ data, dataKey, color }) {
  const maxValue = Math.max(...data.map(d => d[dataKey]));
  const chartHeight = 150;

  return (
    <div className="flex items-end justify-between h-[150px] w-full bg-gray-800/50 p-4 rounded-lg">
      {data.map((d, i) => {
        const barHeight = (d[dataKey] / maxValue) * chartHeight * 0.9;
        return (
          <div key={i} className="flex flex-col items-center group w-full">
            <div className={`w-4/5 rounded-t-md ${color}`} style={{ height: `${barHeight}px` }}>
              <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center block">
                {d[dataKey]}
              </span>
            </div>
            <span className="text-xs text-gray-400 mt-2">{d.day}d</span>
          </div>
        );
      })}
    </div>
  );
}
