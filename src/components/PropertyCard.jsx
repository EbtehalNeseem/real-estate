import React from "react";
import { useEffect } from "react";
import {
  Card, CardHeader, IconButton, CardMedia, CardContent,
  CardActions, Typography, Collapse, Chip, Box, Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { addToWishlist, removeFromWishlist } from "../js/wishlist";
import  useWishlist  from "../hooks/useWishlist";

// ----------- Expand Icon -----------
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


// ----------- Main Component -----------
export default function PropertyCard({ id ,title, price, image, location, description }) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const { wishlistItems, removeItem, fetchWishlist } = useWishlist();

  const handleExpandClick = () => setExpanded(!expanded);
  useEffect(() => {
    setLiked(wishlistItems.some(item => item.id === id));
  }, [wishlistItems, id]);

  const toggleWishlist = async () => {
    if (liked) {
      const wishlistItem = wishlistItems.find(item => item.id === property.id);
      if (wishlistItem) await removeItem(wishlistItem.wishlistId);
    } else {
      await addToWishlist(property.userId, property.id);
      fetchWishlist();
    }
    setLiked(!liked);
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.3s",
        boxShadow: 3,
        "&:hover": { boxShadow: 6, transform: "translateY(-4px)" }
      }}
    >

      {/* -------- IMAGE WITH PRICE BADGE -------- */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            height: { xs: 160, sm: 190, md: 150 },
            width: { xs: 260, sm: 290, md: 330 },
            objectFit: "cover",
            backgroundColor: "var(--bg)"
          }}
          image={image || "https://via.placeholder.com/600x400?text=No+Image"}
          alt={title}
        />

        {/* PRICE BADGE */}
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

      <CardHeader
        title={title}
        sx={{ fontWeight: 600, fontSize: "0.1rem", margin: 0 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
            paddingY: 0,
          }}
        >
          {location}
        </Typography>
      </CardContent>

      {/* -------- ACTIONS -------- */}
      <CardActions disableSpacing>
        <IconButton
          onClick={toggleWishlist}
          sx={{
            transition: "0.2s",
            transform: liked ? "scale(1.2)" : "scale(1)"
          }}
        >

          <FavoriteIcon sx={{ color: liked ? "red" : "grey" }} />
        </IconButton>
        <Button variant="contained" sx={{ background: "var(--secondary)" }}>
          Book a visit
        </Button>
        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>

      {/* -------- DESCRIPTION -------- */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}
