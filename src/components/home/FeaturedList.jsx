import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import FeaturedCard from "./FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";

export default function FeaturedList() {
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
        <Box sx={{ paddingX: "50px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 ,color:"var(--accent)" }}>
                Featured List   
            </Typography>

            {loading ? (
                <Typography>loading...</Typography>
            ) : properties.length === 0 ? (
                <Typography>No Properties found.</Typography>
            ) : (
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2.1}
                    breakpoints={{
                        640: { slidesPerView: 1.3 },
                        1024: { slidesPerView: 2.2 },
                        1400: { slidesPerView: 3.2 },
                    }}
                >
                    {properties.map((item) => (
                        <SwiperSlide key={item.id}>
                            <FeaturedCard
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                location={item.location}
                                description={item.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </Box>
    );
}
