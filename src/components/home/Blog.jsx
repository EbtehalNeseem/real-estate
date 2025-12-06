import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <Box sx={{ padding: "50px"}}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 , color:"var(--primary)"}}>
        Latest Articles
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
          <Grid size={{xs: 12 , sm: 6 , md:4 }} key={i}>
            <BlogCard
              title="Real Estate Tips"
              text="Explore market insights and helpful buying guides."
              image="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
