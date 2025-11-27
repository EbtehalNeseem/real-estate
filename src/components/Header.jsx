import { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Testmonials", "Contact", "About"];

  return (
    <>
      {/* Top Nav */}
      <AppBar position="static" sx={{ background: "#fff", paddingY: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h5" sx={{ fontWeight: "bold", letterSpacing: 1, color: "var(--primary)", display: "flex", alignItems: "center" }}>
            <img className="w-20 h-20 object-contain" src="/Untitled.png" alt="" />
            UrbanGate
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ width: "60%", display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}>
            {navLinks.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "var(--secondary)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  position: "relative",
                  background: "none",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    bottom: -2,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "var(--primary)",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}>
                {item}
              </Button>
            ))}

            <Button
              variant="contained"
              sx={{
                background: "var(--secondary)",
                color: "white",
                fontWeight: "bold",
                "&:hover": { background: "var(--primary)" },
              }}
            >
              Login
            </Button>
          </Box>


          {/* Mobile Menu  */}
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
            >
              {item}
            </Button>
          ))}

        </Box>
      </Drawer>
    </>
  );
}
