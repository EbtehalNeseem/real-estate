    "use client";
    
    import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
    
    export default function WeeklyPropertyViews() {

        const data = [
            { name: "Mon", views: 320 },
            { name: "Tue", views: 290 },
            { name: "Wed", views: 410 },
            { name: "Thu", views: 385 },
            { name: "Fri", views: 450 },
            { name: "Sat", views: 370 },
            { name: "Sun", views: 310 },
          ];
        return (
            <div className="w-full p-10 bg-white rounded-xl shadow-lg border-npne my-10">
                <h2 className="font-bold text-[20px] text-black mb-2">Weekly Property Views  </h2>
                <p className="text-gray-500 text-sm mb-4">Visits by day of week  </p>
    
                <div className= "h-full pr-5">
                    <ResponsiveContainer width="100%" height="300" minWidth= "0" >
                        <BarChart data={data}>
                            <CartesianGrid opacity={0.2} stroke="#1f1f1f" strokeDasharray="3 3" />
                            <XAxis dataKey="name" tickMargin={15} />
                            <YAxis tickMargin={20} />
                            <Tooltip trigger="click" content={() => null} cursor={false} shared={false} />
                            <Bar type="monotone" dataKey="views" fill="var(--primary)" barSize={50} radius={[7, 7, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
    