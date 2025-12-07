import { motion } from "framer-motion";
import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginForm({
  loginData,
  setLoginData,
  errors,
  clearError,
  handleLoginSubmit,
  setIsLogin,
  loading,
}) {

  const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

  return (
    <motion.form
      key="login-form"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4"
      onSubmit={handleLoginSubmit}
    >
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        className={`p-3 mt-3 rounded bg-white shadow w-full ${
          errors.email ? "border border-red-500" : ""
        }`}
        onChange={(e) => {
          setLoginData({ ...loginData, email: e.target.value });
          clearError("email");
        }}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email}</p>
      )}

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
          value={loginData.password}
          sx={{":focus":{outline:"black"}}}
          className={`p-1 rounded bg-white shadow w-full focus:outline-black focus:outline-2 focus:outline-offset-2   ${errors.password ? "border border-red-500" : ""
            }`}
           onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
          clearError("password");
          }}
        />
         {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
     

      {/* Form error */}
      {errors.form && (
        <p className="text-red-500 text-sm mt-1">{errors.form}</p>
      )}

      <button className="mt-2 p-3 rounded bg-[var(--primary)] text-[var(--beige)] hover:bg-[var(--primary)]/70 font-bold">
        {loading ? "Loading..." : "Login"}
      </button>

      <p className="text-[var(--primary)] ">
        Don't have an account?
        <span
          className="cursor-pointer font-bold ml-2 hover:text-[var(--light)]"
          onClick={() => setIsLogin(false)}
        >
          Register
        </span>
      </p>
    </motion.form>
  );
}
