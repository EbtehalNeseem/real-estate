import { Grid, Box, Typography } from "@mui/material";
import { FaPhone ,FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function LeftPanel() {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      {/* Phone */}
      <Box mb={3}>
        <Typography fontSize={20} color="gray">CONTACT</Typography>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
         <FaPhone />
          <Typography>15003</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={1}>
          <FaEnvelope />
          <Typography>info@company.com</Typography>
        </Box>
      </Box>

      {/* Sales Offices */}
      <Box mt={5}>
        <Typography fontWeight={600} variant="h5" mb={1}>
          Sales Offices
        </Typography>

        <Box mb={3}>
          <Typography variant="h6" fontWeight={500}>Nile City Towers</Typography>
          <Typography fontSize={20} color="gray">
            2005C, Nile City Towers, North Tower, 13th Floor, Cornich El Nile
          </Typography>
          <Typography fontSize={13} mt={1} >
            Get Directions
          </Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="h6" fontWeight={500}>El Sheikh Zayed</Typography>
          <Typography fontSize={20} color="gray">
            Zayed Central Park, Gate 3
          </Typography>
          <Typography fontSize={13}>Get Directions</Typography>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={500}>New Cairo</Typography>
          <Typography fontSize={20} color="gray">
            New Cairo, Cairo Governorate
          </Typography>
          <Typography fontSize={13}>Get Directions</Typography>
        </Box>
      </Box>

      {/* Social Icons */}
      <Box display="flex" gap={3} mt={5} fontSize={28}>
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaLinkedinIn />
        <FaTiktok />
      </Box>
    </Grid>
  )
}