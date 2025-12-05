import { Box, Typography, Button } from "@mui/material";
import {MapPin} from "lucide-react";

export default function FeaturedCard({ title, price, image, location }) {
  return (
    <Box
      sx={{
        height: 300,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        "&:hover .overlay": {
          opacity: 1,
        }
      }}
    >
      {/* Overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          width: "100%",
          padding: 2,
          background: "rgba(0,0,0,0.55)",
          color: "white",
          opacity: 0.85,
          transition: "0.3s",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {title}
        </Typography>

        <Box sx={{display: "flex" ,alignItems:"center"}}>
          <MapPin />
        <Typography sx={{ fontSize: "14px", opacity: 0.9 }}>
           
           {location}
        </Typography>
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          {price} EGP
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{
            mt: 1,
            background: "var(--accent)",
            fontSize: "12px",
            "&:hover": { background: "var(--primary)" },
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
}
