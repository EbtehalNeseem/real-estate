import { Grid, Box, Typography } from "@mui/material";
import LeftPanel from "../../components/contact/LeftPanel";
import RightPanel from "../../components/contact/RightPanel";

export default function ContactPage() {
  return (
    <Box sx={{ p: { xs: 3, md: 8 }, bgcolor: "var(--beige)" }}>
      <Typography variant="h4" fontWeight={500} mb={5}>
        Get in touch with our team today.
      </Typography>

      <Grid container spacing={5}>
        <LeftPanel />
        <RightPanel />
      </Grid>
    </Box>
  );
}
