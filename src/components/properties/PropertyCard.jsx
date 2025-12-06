import { useEffect, useState } from "react";
import {
  Card, CardHeader, IconButton, CardMedia, CardContent,
  CardActions, Typography, Collapse, Chip, Box, Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useWishlist from "../../hooks/useWishlist";
import { addToWishlist, removeFromWishlist } from "../../js/wishlist";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PropertyCard({ id, title, price, image, location, description }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const { wishlistItems, fetchWishlist } = useWishlist();

  // Check if this property is already in wishlist
  useEffect(() => {
    setLiked(wishlistItems.some(item => item.property_id === id));
  }, [wishlistItems, id]);

  const toggleWishlist = async () => {
    if (liked) {
      await removeFromWishlist(id);
    } else {
      await addToWishlist(id);
    }

    await fetchWishlist();  
    setLiked(!liked);
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxHeight:"400px",
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.3s",
        boxShadow: 3,
        backgroundColor:"#e2e2c1",
        "&:hover": { boxShadow: 6, transform: "translateY(-4px)" }
      }}
    >

      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            height: { xs: 160, sm: 190, md: 200 },
            width: "100%",
            objectFit: "cover",
          }}
          image={image}
          alt={title}
        />

        {price && (
          <Chip
            label={`${price.toLocaleString()} EGP`}
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "var(--bg)",
              color: "var(--secondary)",
              fontWeight: "bold",
              fontSize: "0.85rem"
            }}
          />
        )}
      </Box>

      <CardHeader sx={{color:"#036103"}}title={title} />

      <CardContent>
        <Typography variant="body2" sx={{ color: "#036103" }}>
          {location}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Box sx={{ width: "60%",display:"flex", justifyContent:"space-between"}}>
          <IconButton onClick={toggleWishlist}>
          <FavoriteIcon sx={{ color: liked ? "#ff0000" : "grey" }} />
        </IconButton>

        <Button variant="contained" sx={{ background: "#036103", color:"#e2e2c1" }}>
          Book a visit
        </Button>
        </Box>

        <ExpandMore expand={expanded} onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon sx={{color:"#036103"}} />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded}>
        <CardContent>
          <Typography sx={{color:"#036103"}}>{description}</Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}
