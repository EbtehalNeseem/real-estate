import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // 1️⃣ Sign up in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    // 2️⃣ Insert into profiles table
    await supabase.from("profiles").insert([
      {
        id: data.user.id,
        full_name: fullName,
        role: "user" // default role
      }
    ]);

    navigate("/login"); // redirect to login
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" mb={3}>Register</Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Full Name"
          fullWidth
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          sx={{ mb: 2 }}
        />
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
        <Button variant="contained" fullWidth type="submit">Register</Button>
      </form>
    </Container>
  );
}
