import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, InputAdornment, Grid } from '@mui/material';
import { Search, ArrowForward, DeliveryDining, LocalFireDepartment } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FeaturedCategories from './FeaturedCategories';
import TopRestaurants from './TopRestaurants';
import FeaturedFoods from './FeaturedFoods';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/restaurants');
    }
  };

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#FFF5F5', pt: 12, pb: 16, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 4 }}>
                <Box 
                  sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    px: 2, 
                    py: 1, 
                    borderRadius: 4, 
                    mb: 3,
                    boxShadow: '0 4px 12px rgba(255, 42, 35, 0.1)'
                  }}
                >
                  <DeliveryDining fontSize="small" color='red' />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "red" }}>Fastest Delivery in Town</Typography>
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.2 }}>
                  Premium Sea <Box component="span" sx={{ color: '#E53953' }}>Products Delivered</Box> Fresh
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, mb: 5 }}>
                  Our job is to filling your tummy with delicious food and with fast and free delivery.
                </Typography>

                {/* Search Bar */}
                <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <TextField 
                    fullWidth
                    placeholder="Search your favorite food..."
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ 
                      bgcolor: 'white', 
                      borderRadius: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 2 }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search color="red" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{ px: 4, py: 2, borderRadius: 2, flexShrink: 0, fontWeight: 700, color:"white", backgroundColor:"red" }}
                  >
                    Order Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
               <Box 
                 component="img"
                 src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Delicious Burger"
                 sx={{ 
                   width: '100%', 
                   maxWidth: 500, 
                   borderRadius: '50%',
                   boxShadow: '0 24px 48px rgba(255, 42, 35, 0.2)',
                   border: '8px solid white'
                 }}
               />
               <Box 
                 sx={{ 
                   position: 'absolute', 
                   bottom: 40, 
                   left: 10, 
                   bgcolor: 'white', 
                   px: 3, 
                   py: 1.5, 
                   borderRadius: 4,
                   boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                   display: 'flex',
                   alignItems: 'center',
                   gap: 1
                 }}
               >
                 <Box sx={{ bgcolor: '#FFF5F5', p: 1, borderRadius: '50%', display: 'flex', color: 'red' }}>
                   <LocalFireDepartment />
                 </Box>
                 <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Cool & Fresh...!</Typography>
               </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FeaturedCategories />
      <TopRestaurants />
      <FeaturedFoods />
    </Box>
  );
};

export default HomePage;
