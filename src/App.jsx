import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import EquipmentDetail from "./components/EquipmentDetail/EquipmentDetail";
import { initialEquipmentData } from "./data/equipmentData";

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [equipmentData, setEquipmentData] = useState(initialEquipmentData);

  useEffect(() => {
    const interval = setInterval(() => {
      setEquipmentData(prevData =>
        prevData.map(eq => {
          const change = (Math.random() - 0.5) * 0.2;
          const newVibration = Math.max(2, parseFloat((eq.metrics.vibration + change).toFixed(1)));
          return { ...eq, metrics: { ...eq.metrics, vibration: newVibration } };
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (page) => {
    setCurrentPage(page);
    setSelectedEquipment(null);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <Header onNavClick={handleNav} />
      <main>
        {currentPage === 'dashboard' && <Dashboard equipmentList={equipmentData} onSelectEquipment={setSelectedEquipment} />}
        {currentPage === 'assistant' && <Assistant />}
      </main>
      {selectedEquipment && (
        <EquipmentDetail equipment={selectedEquipment} onBack={() => setSelectedEquipment(null)} />
      )}
    </div>
  );
}
