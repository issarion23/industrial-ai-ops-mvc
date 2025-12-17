import React from "react";
import StatCard from "../components/StatCard/StatCard";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import WrenchIcon from "../components/Icons/WrenchIcon";

export default function Dashboard({ equipmentList, onSelectEquipment }) {
  const criticalCount = equipmentList.filter(e => e.status === 'Critical').length;

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Monitored Assets" value={equipmentList.length} icon={<WrenchIcon />} />
        <StatCard title="Critical Alerts" value={criticalCount} change="-1 since last week" icon={<WrenchIcon />} />
        <StatCard title="Potential Savings (Ann.)" value="$2.3M" change="+$150k this month" icon={<WrenchIcon />} />
        <StatCard title="System Health" value="92%" change="+3% improvement" icon={<WrenchIcon />} />
      </div>

      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">Critical Equipment Status</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {equipmentList.map(eq => (
          <EquipmentCard key={eq.id} equipment={eq} onSelect={onSelectEquipment} />
        ))}
      </div>
    </div>
  );
}
