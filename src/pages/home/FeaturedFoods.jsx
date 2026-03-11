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
  Stack,
  Chip
} from "@mui/material";

import { ArrowForward, ShoppingCart } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const seafoodItems = [
  {
    id: 1,
    name: "Fresh Sea Fish",
    price: 12.99,
    description: "Freshly caught ocean fish delivered directly from coastal markets.",
    image:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Tiger Prawns",
    price: 18.99,
    description: "Premium tiger prawns with rich flavor and fresh ocean taste.",
    image:
      "https://plus.unsplash.com/premium_photo-1707581570181-a60b7eec7888?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
  },
  {
    id: 3,
    name: "Blue Crab",
    price: 16.49,
    description: "Wild blue crab perfect for seafood lovers and coastal dishes.",
    image:
      "https://images.unsplash.com/photo-1770621651563-ba0ff1340bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Fresh Lobster",
    price: 29.99,
    description: "Premium quality lobster caught fresh from the deep ocean.",
    image:
      "https://images.unsplash.com/photo-1707995546451-26652656d51c?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const FeaturedFoods = () => {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg,#ffffff 0%,#f4f9ff 40%,#eef5ff 100%)"
      }}
    >
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 7
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 900, mb: 1 }}
            >
              Fresh Raw Seafood
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: 18
              }}
            >
              Premium ocean seafood delivered fresh
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
              py: 1.3,
              fontWeight: 700,
              background: "linear-gradient(90deg,#ff2a23,#ff6a00)",
              color: "#fff",
              boxShadow: "0 8px 20px rgba(255,42,35,0.35)"
            }}
          >
            View All
          </Button>
        </Box>

        {/* Seafood Cards */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {seafoodItems.map((food) => (
            <Grid item xs={12} sm={6} md={3} key={food.id}>
              <MotionCard
                variants={cardAnimation}
                whileHover={{
                  y: -12,
                  scale: 1.04
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  ml:5,
                  height:400, width:500,
                }}
              >

                {/* Image */}
                <Box sx={{ overflow: "hidden", position: "relative" }}>
                  <CardMedia
                    component={motion.img}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                    height="220"
                    image={food.image}
                    alt={food.name}
                  />

                  {/* Price Badge */}
                  <Chip
                    label={`$${food.price}`}
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      fontWeight: 700,
                      background: "#ff2a23",
                      color: "#fff"
                    }}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                      mb: 1
                    }}
                  >
                    {food.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#6b7280",
                      mb: 2
                    }}
                  >
                    {food.description}
                  </Typography>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: 18
                      }}
                    >
                      ${food.price}
                    </Typography>

                    <Button
                      size="small"
                      startIcon={<ShoppingCart />}
                      component={motion.button}
                      whileHover={{ scale: 1.1 }}
                      sx={{
                        borderRadius: "20px",
                        fontWeight: 700,
                        background: "#ff2a23",
                        color: "#fff",
                        px: 2
                      }}
                    >
                      Add
                    </Button>
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

export default FeaturedFoods;