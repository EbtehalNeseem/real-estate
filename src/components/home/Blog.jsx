import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <Box sx={{ padding: "50px 5%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Latest Articles
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
          <Grid sx={{xs: 12 , sm: 6 , md:4 }} key={i}>
            <BlogCard
              title="Real Estate Tips"
              text="Explore market insights and helpful buying guides."
              image="https://images.unsplash.com/photo-1507086182422-97bd7ca2413a"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
