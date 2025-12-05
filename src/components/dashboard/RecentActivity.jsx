import ActivityItem from "./ActivityItem";

export default function RecentActivity() {
  const activities = [
     {
    title: "New property added",
    subtitle: "Modern Villa - New Cairo",
    time: "5 minutes ago",
  },
  {
    title: "Property price updated",
    subtitle: "Nasr City Apartment – New price: 950,000 EGP",
    time: "12 minutes ago",
  },
  {
    title: "New client inquiry",
    subtitle: "Request to visit property #A-124",
    time: "1 hour ago",
  },
  ];

  return (
    <div className="p-5 bg-white rounded-xl shadow-lg my-10">
      <h2 className="font-bold text-[20px] text-black mb-2">Recent Activity </h2>
      <p className="text-gray-500 text-sm mb-4">Latest updates and transactions  </p>

      {activities.map((act, i) => (
        <ActivityItem key={i} {...act} />
      ))}
    </div>
  );
}
