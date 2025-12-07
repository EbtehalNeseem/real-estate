import { motion } from "framer-motion";
import React, { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function RegisterForm({
  registerData,
  setRegisterData,
  errors,
  clearError,
  handleRegisterSubmit,
  setIsLogin,
  loading,
}) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <motion.form
      key="register-form"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4"
      onSubmit={handleRegisterSubmit}
    >
      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={registerData.name}
        className={`p-3 rounded bg-white shadow w-full ${errors.name ? "border border-red-500" : ""
          }`}
        onChange={(e) => {
          setRegisterData({ ...registerData, name: e.target.value });
          clearError("name");
        }}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={registerData.email}
        className={`p-3 rounded bg-white shadow w-full ${errors.email ? "border border-red-500" : ""
          }`}
        onChange={(e) => {
          setRegisterData({ ...registerData, email: e.target.value });
          clearError("email");
        }}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Password */}
    
        
        <OutlinedInput
          id="outlined-adornment-password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end" className="pr-5">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={registerData.password}
          sx={{":focus":{outline:"black"}}}
          className={`p-1 rounded bg-white shadow w-full focus:outline-black focus:outline-2 focus:outline-offset-2   ${errors.password ? "border border-red-500" : ""
            }`}
          onChange={(e) => {
            setRegisterData({ ...registerData, password: e.target.value });
            clearError("password");
          }}
        />
         {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      {/* Confirm Password */}
       <OutlinedInput
          id="outlined-adornment-password"
          placeholder="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end" className="pr-5">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={registerData.confirmPassword}
          sx={{":focus":{outline:"black"}}}
          className={`p-1 rounded bg-white shadow w-full focus:outline-black focus:outline-2 focus:outline-offset-2   ${errors.confirmPassword ? "border border-red-500" : ""
            }`}
          onChange={(e) => {
            setRegisterData({ ...registerData, confirmPassword: e.target.value });
            clearError("confirmPassword");
          }}
        />
         {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}


      <button className=" mt-2 p-3 rounded bg-[var(--primary)] text-[var(--beige)] hover:bg-[var(--primary)]/70 font-bold">
        {loading ? "Loading..." : "Register"}
      </button>

      <p className="text-[var(--primary)] ">
        Already have an account?
        <span
          className="cursor-pointer font-bold ml-1 hover:text-[var(--light)]"
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
      </p>
    </motion.form>
  );
}
