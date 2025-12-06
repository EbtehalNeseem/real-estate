import { Grid, TextField, MenuItem, Button, Box, Typography, Paper , InputAdornment, OutlinedInput} from "@mui/material";
import { MDBIcon  } from 'mdb-react-ui-kit';

export default function ContactPage() {
  return (
    <Box sx={{ p:{ xs: 3, md: 8 }, bgcolor: "#fff" }}>
      {/* TITLE */}
      <Typography variant="h4" fontWeight={500} mb={5}>
        Get in touch with our team today.
      </Typography>

      <Grid container spacing={5}>
        {/* LEFT INFO PANEL */}
        <Grid size={{xs:12 , md:4}}>
          {/* Phone */}
          <Box mb={3}>
            <Typography fontSize={14} color="gray">CONTACT</Typography>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <MDBIcon fas icon="phone" />
              <Typography>15003</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={1}>
              <MDBIcon fas icon="envelope" />
              <Typography>info@company.com</Typography>
            </Box>
          </Box>

          {/* Sales Offices */}
          <Box mt={5}>
            <Typography fontWeight={600} mb={1}>
              Sales Offices
            </Typography>

            <Box mb={3}>
              <Typography fontWeight={500}>Nile City Towers</Typography>
              <Typography fontSize={14} color="gray">
                2005C, Nile City Towers, North Tower, 13th Floor, Cornich El Nile
              </Typography>
              <Typography fontSize={13} mt={1} color="black">
                Get Directions
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography fontWeight={500}>El Sheikh Zayed</Typography>
              <Typography fontSize={14} color="gray">
                Zayed Central Park, Gate 3
              </Typography>
              <Typography fontSize={13}>Get Directions</Typography>
            </Box>

            <Box>
              <Typography fontWeight={500}>New Cairo</Typography>
              <Typography fontSize={14} color="gray">
                New Cairo, Cairo Governorate
              </Typography>
              <Typography fontSize={13}>Get Directions</Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Box display="flex" gap={3} mt={5} fontSize={22}>
            <MDBIcon fab icon="facebook-f" />
            <MDBIcon fab icon="instagram" />
            <MDBIcon fab icon="youtube" />
            <MDBIcon fab icon="linkedin" />
            <MDBIcon fab icon="tiktok" />
          </Box>
        </Grid>

        {/* RIGHT FORM PANEL */}
        <Grid size={{xs:12 , md:8}}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, background: "#fafafa" }}>
            <Grid container spacing={3}>
              {/* First / Last Name */}
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={14} mb={1}>First name</Typography>
                <TextField fullWidth placeholder="Enter your first name" />
              </Grid>
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={14} mb={1}>Last name</Typography>
                <TextField fullWidth placeholder="Enter your last name" />
              </Grid>

              {/* Email / Phone */}
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={14} mb={1}>E-mail</Typography>
                <TextField fullWidth placeholder="you@youremail.com" />
              </Grid>
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={14} mb={1}>Phone number</Typography>
                <OutlinedInput
                  fullWidth
                  placeholder="+20"
                  startAdornment={
                    <InputAdornment position="start" >
                    <span className="mr-4">🇪🇬</span> 
                    </InputAdornment>
                    }
                />
              </Grid>

              {/* Department Select */}
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={14} mb={1}>Department</Typography>
                <TextField select fullWidth defaultValue="Customer Service">
                  <MenuItem value="Customer Service">Customer Service</MenuItem>
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                </TextField>
              </Grid>

              {/* Message */}
              <Grid size={{xs:12 }}>
                <Typography fontSize={14} mb={1}>Additional information</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your message"
                  multiline
                  rows={6}
                />
              </Grid>

              {/* Submit */}
              <Grid size={{xs:12 }}>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 1.5,
                    borderRadius: "25px",
                    "&:hover": { bgcolor: "#333" },
                  }}
                  
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
