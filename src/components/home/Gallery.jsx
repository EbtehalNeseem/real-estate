import {Box,  Grid } from "@mui/material";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  
];

export default function Gallery() {
  return (
   
      <Grid container >
        {images.map((img, i) => (
          <Grid sx={{xs:{display:"none"}}} size={{lg:2}} key={i}>
            <Box
              component="img"
              src={img}
              sx={{
                width: "100%",
                maxHeight:100,
                objectFit: "cover",
                overflowX:"scroll"
              }}
            />
          </Grid>
        ))}
      </Grid>
  );
}
