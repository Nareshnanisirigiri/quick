import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Divider
} from "@mui/material";

import {
  Star,
  AccessTime,
  LocationOn,
  FavoriteBorder,
  Share
} from "@mui/icons-material";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import FoodCard from "../../components/cards/FoodCard";

const MotionBox = motion(Box);

const restaurants = [
  {
    id: 1,
    name: "Ocean Fresh Seafood",
    rating: 4.8,
    time: "15-20 min",
    distance: "1.2 km",
    category: "Fish",
    image:
      "https://images.unsplash.com/photo-1767584949756-36f36d043a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Blue Crab Kitchen",
    rating: 4.6,
    time: "20-30 min",
    distance: "2.5 km",
    category: "Crab",
    image:
      "https://images.unsplash.com/photo-1770621651563-ba0ff1340bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Coastal Prawns Hub",
    rating: 4.7,
    time: "10-15 min",
    distance: "0.8 km",
    category: "Prawns",
    image:
      "https://plus.unsplash.com/premium_photo-1757479571101-67504f1fae9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const seafoodMenu = [
  {
    id: 1,
    name: "Fresh Sea Fish",
    price: 14.99,
    description: "Fresh ocean fish cleaned and ready to cook.",
    image:
      "https://plus.unsplash.com/premium_photo-1757479571101-67504f1fae9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Tiger Prawns",
    price: 18.99,
    description: "Large tiger prawns freshly sourced from coastal farms.",
    image:
      "https://plus.unsplash.com/premium_photo-1707581570181-a60b7eec7888?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Blue Crab",
    price: 16.99,
    description: "Premium blue crab perfect for seafood dishes.",
    image:
      "https://images.unsplash.com/photo-1770621651563-ba0ff1340bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Fresh Lobster",
    price: 29.99,
    description: "Luxury lobster freshly delivered from the ocean.",
    image:
      "https://images.unsplash.com/photo-1707995546451-26652656d51c?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === Number(id));

  const [tabIndex, setTabIndex] = useState(0);

  if (!restaurant) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4">Restaurant not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ pb: 8, bgcolor: "#F8F9FA", minHeight: "100vh" }}>
      
      {/* Hero Image */}
      <Box sx={{ height: 320, position: "relative" }}>
        <Box
          component="img"
          src={restaurant.image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.45)"
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ mt: -10, position: "relative", zIndex: 2 }}>
        
        {/* Restaurant Info Card */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            bgcolor: "white",
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}
        >
          <Grid container spacing={4} alignItems="center">
            
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    px: 1,
                    borderRadius: 1,
                    fontWeight: "bold"
                  }}
                >
                  Top Rated
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Seafood • {restaurant.category}
                </Typography>
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                {restaurant.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  color: "text.secondary"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Star color="primary" />
                  <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
                    {restaurant.rating}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <AccessTime fontSize="small" />
                  <Typography>{restaurant.time}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LocationOn fontSize="small" />
                  <Typography>{restaurant.distance}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 1
              }}
            >
              <IconButton sx={{ bgcolor: "grey.100" }}>
                <FavoriteBorder />
              </IconButton>

              <IconButton sx={{ bgcolor: "grey.100" }}>
                <Share />
              </IconButton>
            </Grid>

          </Grid>
        </MotionBox>

        {/* Tabs */}
        <Box sx={{ mt: 6 }}>
          <Tabs
            value={tabIndex}
            onChange={(e, v) => setTabIndex(v)}
            sx={{
              mb: 4,
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "1rem"
              }
            }}
          >
            <Tab label="Menu" />
            <Tab label="Reviews" />
            <Tab label="Information" />
          </Tabs>

          <Divider sx={{ mb: 4 }} />

          {/* Menu */}
          {tabIndex === 0 && (
            <>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
                Fresh Seafood Menu
              </Typography>

              <Grid container spacing={4}>
                {seafoodMenu.map(food => (
                  <Grid item xs={12} sm={6} md={4} key={food.id}>
                    <FoodCard {...food} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {tabIndex === 1 && (
            <Typography color="text.secondary">
              Customer reviews coming soon.
            </Typography>
          )}

          {tabIndex === 2 && (
            <Typography color="text.secondary">
              Restaurant information coming soon.
            </Typography>
          )}

        </Box>
      </Container>
    </Box>
  );
};

export default RestaurantDetails;