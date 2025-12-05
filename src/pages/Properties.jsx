import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [ properties, setproperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const fetchdata = async () => {
      const { data, error } = await supabase.from("Properties").select("*");

      if (error){ console.log("❌ Connection Error:", error);}
      else {
        console.log("✅ Data fetched:", data);
        setproperties(data);
      }

      setLoading(false);
    };
   fetchdata();
  }, []);

  return (
    <Box sx={{ padding: "50px 5%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Featured Listings
      </Typography>

      {loading ? (
        <Typography>loading...</Typography>
         ) : properties.length === 0 ? (
        <Typography>No Properties found.</Typography>
      ) : (
        <Grid container spacing={5}>
          {properties.map((item) => (
            <Grid sx={{ md: 4 ,xs: 12}}  key={item.id}>
              <PropertyCard
                title={item.title}
                price={item.price}
                image={item.image}
                location={item.location}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
