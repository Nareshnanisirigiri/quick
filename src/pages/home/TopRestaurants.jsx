import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";

import {
  ArrowForward,
  Star,
  AccessTime,
  LocationOn,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionCard = motion(Card);

const seafoodMarkets = [
  {
    id: 1,
    name: "Ocean Fresh Fish Market",
    rating: 4.8,
    time: "10-15 min",
    distance: "0.9 km",
    category: "Sea Fish",
    image:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Coastal Prawns Hub",
    rating: 4.7,
    time: "15-20 min",
    distance: "1.8 km",
    category: "Prawns",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Fresh Crab Corner",
    rating: 4.9,
    time: "20-25 min",
    distance: "2.1 km",
    category: "Crab",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Blue Ocean Seafood",
    rating: 4.9,
    time: "12-18 min",
    distance: "1.4 km",
    category: "Mixed Seafood",
    image:
      "https://plus.unsplash.com/premium_photo-1719611418325-054872d7c8b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const TopRestaurants = () => {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg,#ffffff 0%,#f4f9ff 40%,#eef5ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 7,
            ml:4
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 1,
                letterSpacing: 1,
              }}
            >
              Fresh Seafood Markets
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: 18,
              }}
            >
              Discover premium raw seafood near you
            </Typography>
          </Box>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            endIcon={<ArrowForward />}
            sx={{
              borderRadius: "40px",
              px: 4,
              py: 1.2,
              fontWeight: 700,
              fontSize: 15,
              background: "linear-gradient(90deg,#ff2a23,#ff6a00)",
              color: "#fff",
              boxShadow: "0 8px 20px rgba(255,42,35,0.35)",
              "&:hover": {
                background: "linear-gradient(90deg,#ff2a23,#ff6a00)",
              },
            }}
          >
            View All
          </Button>
        </Box>

        {/* Cards */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {seafoodMarkets.map((market) => (
            <Grid item xs={12} sm={6} md={3} key={market.id}>
              <MotionCard
                variants={cardAnimation}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  ml:3,
                }}
              >
                {/* Image */}
                <Box sx={{ overflow: "hidden", position: "relative" }}>
                  <CardMedia
                    component={motion.img}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                    height="220"
                    image={market.image}
                    alt={market.name}
                  />

                  {/* Rating Badge */}
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    sx={{
                      position: "absolute",
                      top: 15,
                      left: 15,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "8px",
                      background: "#ffffff",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Star sx={{ fontSize: 16, color: "#FFB400" }} />
                    <Typography fontWeight={700} fontSize={13}>
                      {market.rating}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                      mb: 1,
                    }}
                  >
                    {market.name}
                  </Typography>

                  <Chip
                    label={market.category}
                    size="small"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      background: "#eef4ff",
                    }}
                  />

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <AccessTime sx={{ fontSize: 17 }} />
                      <Typography fontSize={14}>
                        {market.time}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <LocationOn sx={{ fontSize: 17 }} />
                      <Typography fontSize={14}>
                        {market.distance}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRestaurants;