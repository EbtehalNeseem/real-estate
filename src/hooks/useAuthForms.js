import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

// ---------- Email Validation ----------
const emailIsValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

// ---------- Strong Password Validation ----------
const strongPassword = (password) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  );
};

export function useAuthForms() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ------- DATA -------
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

  // ------- VALIDATION -------
  const validateLogin = () => {
    const e = {};
    if (!emailIsValid(loginData.email)) e.email = "Invalid email";
    if (!loginData.password) e.password = "Password is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateRegister = () => {
    const e = {};

    if (!registerData.name.trim()) e.name = "Name is required";
    if (!emailIsValid(registerData.email)) e.email = "Invalid email";

    if (!strongPassword(registerData.password)) {
      e.password =
        "Password must be more than 8 chars, include a capital letter and a number";
    }

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

  // ------- LOGIN HANDLER  -------
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    setLoading(true);
    setErrors({});

    const { data: authUser, error } = await supabase.auth.signInWithPassword(loginData);

    if (error) {
      setErrors({ form: error.message });
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", authUser.user.id)
      .single();

    // redirect based on role
    if (profile?.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }

  };

  // ------- REGISTER HANDLER-------
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    setLoading(true);
    setErrors({});

    // 1) Create auth user
    const { data, error } = await supabase.auth.signUp({
      email: registerData.email,
      password: registerData.password,
    });

    if (error) {
      setErrors({ form: error.message });
      setLoading(false);
      return;
    }

    // 2) Insert profile row 
    if (data?.user) {
      const { error: profileErr } = await supabase.from("profiles").insert({
        id: data.user.id,
        name: registerData.name,
        role: "user",
      });

      if (profileErr) {
        setErrors({ form: profileErr.message });
        setLoading(false);
      }
    }

    // fetch user role from profiles table
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", authUser.user.id)
      .single();

    // redirect based on role
    if (profile?.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/home");
    }
  };




  return {
    isLogin,
    setIsLogin,
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    errors,
    loading,
    handleLoginSubmit,
    handleRegisterSubmit,
    clearError,
  };
}
