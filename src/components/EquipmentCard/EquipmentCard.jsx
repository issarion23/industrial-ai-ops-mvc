import React from "react";
import { getStatusStyles } from "../../utils/getStatusStyles";

export default function EquipmentCard({ equipment, onSelect }) {
  const styles = getStatusStyles(equipment.status);

  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg border-l-4 ${styles.border} cursor-pointer hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105`}
      onClick={() => onSelect(equipment)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold text-white">{equipment.name}</h4>
        <div className={`px-3 py-1 text-xs font-semibold rounded-full ${styles.bg} ${styles.text}`}>
          {equipment.status}
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-1">{equipment.id} | {equipment.type}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-300">
        <span>Vibration: <span className="font-semibold">{equipment.metrics.vibration} mm/s</span></span>
        <span>Temp: <span className="font-semibold">{equipment.metrics.temperature}°C</span></span>
        <span>Pressure: <span className="font-semibold">{equipment.metrics.pressure} psi</span></span>
      </div>
      {equipment.prediction && (
        <div className={`mt-3 p-3 rounded-md text-sm ${styles.bg} border ${styles.border}`}>
          <p className={`${styles.text} font-bold`}>
            Failure predicted in {equipment.prediction.timeToFailure}.
          </p>
        </div>
      )}
    </div>
  );
}
