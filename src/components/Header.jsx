import { useState, useContext } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box, Button, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.png"
import { ColorModeContext } from "../App";
import MaterialUISwitch from "./MaterialUISwitch";
export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);

  const navLinks = ["Home", "Properties", "Wishlist", "Contact", "About"];
  return (
    <div className="h-20">
      {/* Top Nav */}
      <AppBar position="fixed" sx={{ background: "#036103", paddingY: 1, paddingX: 4 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ width: 50, height: 50 }} src="/logo.png" alt="" />
            <Button onClick={() => navigate("/Home")} sx={{ fontWeight: "bold", fontSize: 20, letterSpacing: 2, color: "#e2e2c1" }}>
              UrbanGate
            </Button>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ width: "60%", display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}>
            {navLinks.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#e2e2c1",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  position: "relative",
                  background: "none",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -2,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#e2e2c1",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
                onClick={() => navigate("/" + item)}
              >
                {item}
              </Button>
            ))}

            <MaterialUISwitch onChange={colorMode.toggleColorMode} />
            <Button
              variant="contained"
              sx={{
                background: "var(--beige)",
                color: "var(--accent)",
                fontWeight: "bold",
                "&:hover": {
                  background: "var(--accent)",
                  color: "var(--beige)",
                  transition: " 0.5s ease-in-out"
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>


          {/* Mobile Menu  */}
          <MaterialUISwitch onChange={colorMode.toggleColorMode} sx={{ display: { xs: "block", md: "none" }, }} />
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: "block", md: "none" },
                background: "var(--secondary)",
                color: "white",
                fontWeight: "bold",
                "&:hover": { background: "var(--primary)" },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, fontSize: "10px", fontWeight: "bold" }}
              onClick={() => setOpen(true)}
              color="var(--primary)"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {navLinks.map((item) => (
            <Button
              key={item}
              sx={{
                color: "var(--secondary)",
                fontSize: "18px",
                justifyContent: "flex-start",
                textTransform: "none",
                "&:hover": { color: "black" }
              }}
              onClick={() => {
                navigate("/" + item),
              setOpen(false)
              }
              }
            >
              {item}
            </Button>
          ))}

        </Box>
      </Drawer>
    </div>
  );
}
