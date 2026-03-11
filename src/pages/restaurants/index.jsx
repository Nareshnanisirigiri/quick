import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button
} from "@mui/material";

import { Search, FilterList } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import RestaurantCard from "../../components/cards/RestaurantCard";

const MotionBox = motion(Box);

const allRestaurants = [
  {
    id: 1,
    name: "Ocean Fresh Seafood",
    rating: 4.8,
    time: "15-20 min",
    distance: "1.2 km",
    status: "Open",
    category: "Fish",
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Blue Crab Kitchen",
    rating: 4.6,
    time: "20-30 min",
    distance: "2.5 km",
    status: "Open",
    category: "Crab",
    price: "$$$",
    image:
      "https://media.istockphoto.com/id/1491118346/photo/bulk-photo-of-live-blue-crabs.jpg?s=1024x1024&w=is&k=20&c=2am3ji1eqFbpXdqX4L2lQvkid_YneTlGbrTnrqwO5rw="
  },
  {
    id: 3,
    name: "Coastal Prawns Hub",
    rating: 4.7,
    time: "10-15 min",
    distance: "0.8 km",
    status: "Open",
    category: "Prawns",
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1765100479761-2359e22fbe16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Golden Lobster House",
    rating: 4.9,
    time: "25-35 min",
    distance: "3.1 km",
    status: "Open",
    category: "Lobster",
    price: "$$$",
    image:
      "https://images.unsplash.com/photo-1765100479761-2359e22fbe16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Sea Pearl Fish Market",
    rating: 4.5,
    time: "15-25 min",
    distance: "1.7 km",
    status: "Open",
    category: "Fish",
    price: "$",
    image:
      "https://plus.unsplash.com/premium_photo-1707785936079-3e265d78d84c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Ocean Wave Seafood Grill",
    rating: 4.7,
    time: "18-28 min",
    distance: "2.2 km",
    status: "Open",
    category: "Mixed Seafood",
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1592164773741-c8b551687af2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const RestaurantsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (searchTerm) {
      searchParams.set("search", searchTerm);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams, { replace: true });
  }, [searchTerm, setSearchParams, searchParams]);

  const filtered = allRestaurants.filter((r) => {
    const matchName = r.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      category === "All" || r.category === category;

    return matchName && matchCategory;
  });

  return (
    <Box
      sx={{
        py: 8,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#ffffff 0%,#f4f9ff 40%,#eef5ff 100%)"
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 2,
            background:
              "linear-gradient(90deg, #f72424, #7e0606)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color:"red"

          }}
        >
          Seafood Restaurants
        </Typography>

        {/* Filters */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "red(10px)",
            p: 3,
            borderRadius: 4,
            mb: 6,
            display: "flex",
            gap: 2,
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
          }}
        >
          <TextField
            fullWidth
            placeholder="Search seafood restaurants..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{color:"red"}}>
                  <Search />
                </InputAdornment>
              )
            }}
          />

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Fish">Fish</MenuItem>
              <MenuItem value="Prawns">Prawns</MenuItem>
              <MenuItem value="Crab">Crab</MenuItem>
              <MenuItem value="Lobster">Lobster</MenuItem>
              <MenuItem value="Mixed Seafood">
                Mixed Seafood
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{
              py: 2,
              px: 3,
              borderRadius: 2,
              fontWeight: 700,
              color:"red"
            }}
          >
            More Filters
          </Button>
        </MotionBox>

        {/* Restaurants Grid */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {filtered.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <MotionBox
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                  scale: 1.03
                }}
                transition={{ duration: 0.3 }}
                onClick={() =>
                  (window.location.href = `/restaurants/${restaurant.id}`)
                }
                sx={{
                  cursor: "pointer", width:350, 
                }}
              >
                <RestaurantCard {...restaurant} />
              </MotionBox>
            </Grid>
          ))}

          {filtered.length === 0 && (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography
                  variant="h6"
                  color="#333333"
                >
                  No seafood restaurants found.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default RestaurantsPage;