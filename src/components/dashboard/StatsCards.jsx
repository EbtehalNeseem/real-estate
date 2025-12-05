import { DollarSign, Users, Package } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsCards() {
  const stats = [
    { label: "Customers", value: "1,250", icon: Users },
        { label: "Properties Count", value: "85", icon: Package },
        { label: "Total Revenue", value: "45,000 L.E", icon: DollarSign },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {stats.map((item) => (
        <StatCard key={item.label} {...item} />
      ))}
    </div>
  );
}
