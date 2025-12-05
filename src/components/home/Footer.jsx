import { Box, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ background: "var(--accent)", color: "white", padding: "40px 5%" }}>
      <Grid container spacing={4}>

        <Grid sx={{xs: 12 , sm: 6 , md: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            UrbanGate
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "14px", color: "#ccc" }}>
            Your trusted partner for buying, selling and renting properties.
          </Typography>
        </Grid>

        <Grid sx={{xs: 12 , sm: 4 }}>
          <Typography fontWeight="bold">Quick Links</Typography>
          <Typography sx={{ mt: 1 }}>Home</Typography>
          <Typography>Properties</Typography>
          <Typography>Contact</Typography>
        </Grid>

        <Grid sx={{xs: 12 , sm: 4 }}>
          <Typography fontWeight="bold">Contact</Typography>
          <Typography sx={{ mt: 1 }}>info@urbangate.com</Typography>
          <Typography>+20 123 456 7890</Typography>
        </Grid>

      </Grid>

      <Typography sx={{ textAlign: "center", mt: 4, color: "#aaa" }}>
        © 2024 UrbanGate. All rights reserved.
      </Typography>
    </Box>
  );
}
