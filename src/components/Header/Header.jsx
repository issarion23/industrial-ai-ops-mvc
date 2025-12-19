import React from "react";

export default function Header({ onNavClick }) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M6 12H3m18 0h-3" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white">Industrial AI Ops: TCO</h1>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onNavClick('dashboard')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 rounded-md">Dashboard</button>
        <button onClick={() => onNavClick('assistant')} className="px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 rounded-md">Engineer Assistant</button>
      </div>
    </header>
  );
}
