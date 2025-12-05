import { motion } from "framer-motion";

export default function RegisterForm({
  registerData,
  setRegisterData,
  errors,
  clearError,
  handleRegisterSubmit,
  setIsLogin,
  loading,
}) {
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
        className={`p-3 rounded bg-white shadow w-full ${
          errors.name ? "border border-red-500" : ""
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
        className={`p-3 rounded bg-white shadow w-full ${
          errors.email ? "border border-red-500" : ""
        }`}
        onChange={(e) => {
          setRegisterData({ ...registerData, email: e.target.value });
          clearError("email");
        }}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={registerData.password}
        className={`p-3 rounded bg-white shadow w-full ${
          errors.password ? "border border-red-500" : ""
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={registerData.confirmPassword}
        className={`p-3 rounded bg-white shadow w-full ${
          errors.confirmPassword ? "border border-red-500" : ""
        }`}
        onChange={(e) => {
          setRegisterData({
            ...registerData,
            confirmPassword: e.target.value,
          });
          clearError("confirmPassword");
        }}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}

      <button className="mt-4 p-3 rounded bg-[var(--primary)] text-[var(--beige)] hover:bg-[var(--primary)]/70 font-bold">
        {loading ? "Loading..." : "Register"}
      </button>

      <p className="text-[var(--primary)] mt-3">
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
