import React, { useState } from "react";
import { IconButton, Input, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordInput({ value, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      value={value}
      placeholder={placeholder}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={toggleVisibility} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      fullWidth
      sx={{ border:"none", backgroundColor:"white" , ":hover":{}}}
      className={`p-3 rounded bg-white shadow w-full ${
          errors.password ? "border border-red-500" : ""
        }`}
        
    />
  );
}
