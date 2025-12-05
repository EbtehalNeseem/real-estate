"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function MonthlyPropertyListings() {
     const data = [
    { name: "Jan", listings: 18 },
    { name: "Feb", listings: 25 },
    { name: "Mar", listings: 22 },
    { name: "Apr", listings: 30 },
    { name: "May", listings: 28 },
  ];
    return (
        <div className="w-full p-8 bg-white rounded-xl shadow-lg border-none my-10">
            <h2 className="font-bold text-[20px] text-black mb-2">Monthly Property Listings </h2>
            <p className="text-gray-500 text-sm mb-4">Monthly sales performance</p>

            <div className="h-full pr-5">
                <ResponsiveContainer width="100%" height="300" minWidth= "0">
                    <LineChart data={data}>
                        <CartesianGrid opacity={0.2} stroke="#838282ff" strokeDasharray="3 3" />
                        <XAxis dataKey="name" tickMargin={15} />
                        <YAxis tickMargin={20} />
                        <Tooltip />
                        <Line type="monotone" dataKey="listings" stroke="var(--primary)" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
