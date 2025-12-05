import { Box, Button, Typography, TextField } from "@mui/material";
import image from "../../assets/1d26526d3571137921e395ce91b350e9.jpg"

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px 5%",
      }}
    >
      
      {/* Left Text */}
      <Box sx={{ maxWidth: "50%" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2  }}>
          Find Your Dream Home
        </Typography>

        <Typography sx={{ color: "gray", mb: 3 }}>
          Discover the best properties tailored for your needs. Buy, sell, or rent with confidence.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField label="Location" size="small" />
          <TextField label="Type" size="small" />
          <Button variant="contained" sx={{ background: "var(--secondary)" }}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Right Image */}
      <Box sx={{ width: "45%" }}>
        <img src={image} alt="" />
      </Box>

    </Box>
  );
}
