import { Box, Typography } from "@mui/material";

export default function BlogCard({ image, title, text }) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        background: "white",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <Box
        component="img"
        src={image}
        alt=""
        sx={{
          width: "100%",
          height: 180,
          objectFit: "cover",
        }}
      />
      <Box sx={{ padding: 2 }}>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography sx={{ fontSize: "14px", color: "gray", mt: 1 }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
