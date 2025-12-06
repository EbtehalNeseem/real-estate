import { Box, Button, Typography, TextField } from "@mui/material";
import image from "../../assets/0866a3279b9b69e3ff11415cbfcf47a3.jpg"

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "50px ",
      }}
    >
      
      {/* Left Text */}
      <Box sx={{ maxWidth: "50%" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2  }}>
          Find Your Dream Home
        </Typography>

        <Typography sx={{ color: "gray", mb: 3 }}>
          Discover the best properties tailored for your needs. Buy or rent with confidence.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField label="Location" size="small" />
          <TextField label="Type" size="small" />
          <Button variant="contained" sx={{ background: "var(--primary)" }}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Right Image */}
      <Box sx={{ width: "50%" ,paddingLeft:"20px" , borderRadius:"50%" }}>
        <img src={image} alt="" className="rounded-[30px] object-cover" />
      </Box>

    </Box>
  );
}
