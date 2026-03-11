import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

import SetMealIcon from "@mui/icons-material/SetMeal";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const MotionPaper = motion(Paper);

const categories = [
  {
    name: "Sea Fish",
    icon: <SetMealIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Prawns",
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Crab",
    icon: <LunchDiningIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Lobster",
    icon: <LocalDiningIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Oysters",
    icon: <EmojiFoodBeverageIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Squid",
    icon: <FastfoodIcon sx={{ fontSize: 40 }} />,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const FeaturedCategories = () => {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #eef6ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 900,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Fresh Seafood Categories
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 7, fontSize: 18 }}
        >
          Explore premium raw seafood items
        </Typography>

        {/* Grid */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((cat, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <MotionPaper
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4 }}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  background:
                    "linear-gradient(145deg, #ffffff, #f0f6ff)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  ml:3,
                }}
              >
                {/* Icon Circle */}
                <Box
                  component={motion.div}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    mb: 2,
                    color: "#ff2a23",
                    background:
                      "linear-gradient(135deg, #ffeceb, #ffffff)",
                    boxShadow:
                      "0 6px 18px rgba(255,42,35,0.15)",
                  }}
                >
                  {cat.icon}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: 0.5,
                  }}
                >
                  {cat.name}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCategories;