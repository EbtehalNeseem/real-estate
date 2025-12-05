import { useState } from "react";
import { supabase } from "../services/supabase";

// Email regex
const emailIsValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

export function useAuthForms() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ------- VALIDATION -------
  const validateLogin = () => {
    const e = {};
    if (!emailIsValid(loginData.email)) e.email = "Invalid email";
    if (!loginData.password || loginData.password.length < 6)
      e.password = "Password must be at least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateRegister = () => {
    const e = {};
    if (!registerData.name.trim()) e.name = "Name is required";
    if (!emailIsValid(registerData.email)) e.email = "Invalid email";
    if (registerData.password.length < 6)
      e.password = "Password must be at least 6 characters";
    if (registerData.password !== registerData.confirmPassword)
      e.confirmPassword = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ----- CLEAR ONE ERROR -----
  const clearError = (key) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  // ------- HANDLERS -------
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    setLoading(true);
    setErrors({});
    const { error } = await supabase.auth.signInWithPassword(loginData);
    if (error) setErrors({ form: error.message });
    setLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    setLoading(true);
    setErrors({});
    const { error } = await supabase.auth.signUp({
      email: registerData.email,
      password: registerData.password,
    });
    if (error) setErrors({ form: error.message });
    setLoading(false);
  };

  return {
    // states
    isLogin,
    setIsLogin,
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    errors,
    loading,

    // handlers
    handleLoginSubmit,
    handleRegisterSubmit,
    clearError,
  };
}
