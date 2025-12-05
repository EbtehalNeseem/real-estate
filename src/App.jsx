import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Auth from "./pages/AuthPage"
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./pages/DashboardLayout";
import ManageProperties from "./pages/ManageProperties";
import EditProperty from "./pages/EditProperty";
import AddProperty from "./pages/AddProperty";

import { useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProtectedRoute from "./components/ProtectedRoutes";


export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
              background: {
                default: "#033101ff",
                paper: "#034b03",
              },
            }
            : {}),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="auth" element={<Auth />} />
              <Route path="login" element={<Auth />} />
              <Route path="register" element={<Auth />} />
              <Route path="properties" element={<Properties />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="manage" element={<ManageProperties />} />
              <Route path="add" element={<AddProperty />} />
              <Route path="edit/:id" element={<EditProperty />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
