import MaterialUISwitch from "../MaterialUISwitch"; 
import { ColorModeContext } from "../../App";
import { useContext } from "react";


export default function DashboardHeader() {
   const colorMode = useContext(ColorModeContext);
  return (
   <div className="w-full pr-20 flex justify-between">
     <div>
      <h1 className="text-3xl font-bold ">Dashboard</h1>
      <p className=" text-sm my-3">
        Welcome Back! Here's what's happening today.
      </p>
    </div>
    <MaterialUISwitch onChange={colorMode.toggleColorMode} className="" />
   </div>
  );
}
