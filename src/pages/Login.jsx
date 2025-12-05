import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    // جلب profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .single();

    // تخزين role لو حابة في localStorage أو Context
    localStorage.setItem("role", profile.role);
    localStorage.setItem("userId", profile.id);

    // Redirect based on role
    if (profile.role === "admin") navigate("/admin");
    else navigate("/"); // regular user -> Home
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" mb={3}>Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />
        {errorMsg && <Typography color="error" mb={2}>{errorMsg}</Typography>}
        <Button variant="contained" fullWidth type="submit">Login</Button>
      </form>
    </Container>
  );
}
