import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import MonthlyPropertyListings from "../components/dashboard/MonthlyPropertyListings";
import WeeklyPropertyViews from "../components/dashboard/WeeklyPropertyViews";
import RecentActivity from "../components/dashboard/RecentActivity"
const dashboard = () => {
   

   

    return (
        <div className="m-10">
        <DashboardHeader />
        <StatsCards/> 
        <MonthlyPropertyListings  />
        <WeeklyPropertyViews />
        <RecentActivity/>
        </div>
    );
};

export default dashboard;