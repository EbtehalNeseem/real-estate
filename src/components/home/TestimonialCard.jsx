import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function TestimonialCard({ text, name }) {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        background: "white",
      }}
    >
      <Box sx={{ color: "#f5c518", display: "flex", gap: 0.5 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon key={i} />
        ))}
      </Box>

      <Typography sx={{ mt: 2, color: "gray" }}>{text}</Typography>

      <Typography sx={{ mt: 2, fontWeight: "bold" }}>{name}</Typography>
    </Box>
  );
}
