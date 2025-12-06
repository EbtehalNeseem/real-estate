import { Box, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

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
      <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </Stack>

      <Typography sx={{ mt: 2, color: "gray" }}>{text}</Typography>

      <Typography sx={{ mt: 2, fontWeight: "bold" ,color:"#036103"}}>{name}</Typography>
    </Box>
  );
}
