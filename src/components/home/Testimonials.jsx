import { Box, Grid, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <Box sx={{ padding: "50px 5%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        What Our Clients Say
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
          <Grid sx={{xs: 12 , lg: 4 , md: 4 }} key={i}>
            <TestimonialCard
              text="Great experience! They helped me find the perfect home."
              name="Mohamed Ali"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
