export default function ActivityItem({ title, subtitle, time }) {
  return (
    <div className="flex items-start justify-between py-3 ">
      <div>
        <p className="font-medium text-black">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <span className="text-xs text-black text-gray-400">{time}</span>
    </div>
  );
}
