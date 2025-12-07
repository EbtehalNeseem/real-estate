import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import PropertyCard from "../../components/properties/PropertyCard";

export default function Properties() {
  const [properties, setproperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const { data, error } = await supabase.from("properties").select("*");

      if (error) { console.log("❌ Connection Error:", error); }
      else {
        console.log("✅ Data fetched:", data);
        setproperties(data);
      }

      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <Box sx={{ padding: "50px 5%" , backgroundColor:"var(--beige)"}}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "var(--primary)" }}>
        Properties List
      </Typography>

      {loading ? (
        <Typography>loading...</Typography>
      ) : properties.length === 0 ? (
        <Typography>No Properties found.</Typography>
      ) : (
        <Grid container spacing={5}>
          {properties.map((item) => (
            <Grid size={{ md: 4, xs: 6 }} key={item.id}>
              <PropertyCard
                id={item.id}
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
