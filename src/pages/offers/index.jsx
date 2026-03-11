import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
} from "@mui/material";

import {
  ContentCopy,
  LocalOffer,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const offersData = [
  {
    id: 1,
    title: "40% Off Fresh Fish Orders",
    description:
      "Enjoy fresh ocean fish delivered directly from fishermen with 40% off on your first seafood order.",
    code: "FISH40",
    type: "New Customers",
    color: "#FF2A23",
    bgImage:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Free Delivery on Seafood",
    description:
      "Order prawns, crab, lobster or fish and enjoy free delivery this weekend on orders above $25.",
    code: "OCEANFREE",
    type: "Weekend Offer",
    color: "#FF2A23",
    bgImage:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Prawns",
    description:
      "Buy fresh tiger prawns and get another pack absolutely free for a limited time.",
    code: "PRAWNBOGO",
    type: "Special Deal",
    color: "#FF9800",
    bgImage:
      "https://plus.unsplash.com/premium_photo-1707581570141-8fa4e871a60b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "$15 Off Lobster Orders",
    description:
      "Get $15 off on premium lobster orders above $60. Freshly caught and delivered to your door.",
    code: "LOBSTER15",
    type: "Premium Offer",
    color: "#4CAF50",
    bgImage:
      "https://images.unsplash.com/photo-1655697253644-63c270874bb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const OffersPage = () => {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied ${code} to clipboard!`);
  };

  return (
    <Box
      sx={{
        py: 10,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#ffffff 0%,#f4f9ff 40%,#eef5ff 100%)",
      }}
    >
      <Container maxWidth="lg">

        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              background:
                "linear-gradient(90deg, #cf2222, #b42a04)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Fresh Seafood Deals
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Enjoy premium seafood offers on fresh fish, prawns, crab,
            and lobster delivered directly from coastal markets.
          </Typography>
        </Box>

        {/* Offers Grid */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {offersData.map((offer) => (
            <Grid item xs={12} md={6} key={offer.id}>
              <MotionPaper
                variants={cardAnimation}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.85)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                   width:540,
                }}
              >

                {/* Image Header */}
                <Box
                  sx={{
                    height: 220,
                   
                    backgroundImage: `url(${offer.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Dark Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7))",
                    }}
                  />

                  {/* Offer Type */}
                  <Chip
                    label={offer.type}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: offer.color,
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />

                  {/* Title */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#fff",
                        fontWeight: 900,
                        textShadow:
                          "0 4px 12px rgba(0,0,0,0.5)",
                      }}
                    >
                      {offer.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Offer Content */}
                <Box
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      mb: 4,
                      fontSize: 16,
                      lineHeight: 1.6,
                    }}
                  >
                    {offer.description}
                  </Typography>

                  {/* Coupon Box */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      bgcolor: "#f6f9ff",
                      p: 2,
                      borderRadius: 2,
                      border: "2px dashed #dbeafe",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LocalOffer
                        sx={{ color: "red" }}
                      />

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: 2,
                        }}
                      >
                        {offer.code}
                      </Typography>
                    </Box>

                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      variant="contained"
                      onClick={() => handleCopy(offer.code)}
                      startIcon={<ContentCopy />}
                      sx={{
                        borderRadius: 2,
                        fontWeight: 700,
                        background:
                          "linear-gradient(90deg, #f72626, #f82c2c)",
                      }}
                    >
                      Copy
                    </Button>
                  </Box>
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OffersPage;