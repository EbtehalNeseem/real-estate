import { Grid, TextField, MenuItem, Button, Typography, Paper , InputAdornment, OutlinedInput} from "@mui/material";

export default function RightPanel (){
    return(
         <Grid size={{xs:12 , md:8}}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, background: "var(--beige)" }}>
            <Grid container spacing={3}>
                
              {/* First / Last Name */}
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}} mb={1}>First name</Typography>
                <TextField fullWidth placeholder="Enter your first name" />
              </Grid>
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}} mb={1}>Last name</Typography>
                <TextField fullWidth placeholder="Enter your last name" />
              </Grid>

              {/* Email / Phone */}
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}}  mb={1}>E-mail</Typography>
                <TextField fullWidth placeholder="you@youremail.com" />
              </Grid>
              <Grid size={{xs:12 , md:6}}>
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}}  mb={1}>Phone number</Typography>
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
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}}  mb={1}>Department</Typography>
                <TextField select fullWidth defaultValue="Customer Service">
                  <MenuItem value="Customer Service">Customer Service</MenuItem>
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                </TextField>
              </Grid>

              {/* Message */}
              <Grid size={{xs:12 }}>
                <Typography fontSize={20} sx={{fontWeight:"400",color:"var(--primary)"}}  mb={1}>Additional information</Typography>
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
                    bgcolor: "var(--primary)",
                    color: "var(--beige)",
                    fontSize:"17px",
                    py: 1.5,
                    borderRadius: "25px",
                    "&:hover": { bgcolor: "var(--light)" },
                  }}
                  
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    )
}