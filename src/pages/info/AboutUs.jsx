import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: 'red' }}>
            About QuickEat
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            We're on a mission to bring the world's best local restaurants directly to your doorstep, faster and fresher than ever before.
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant Team"
              sx={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
              Founded in 2023, QuickEat started with a simple idea: that getting food delivered should be fast, seamless, and incredibly delicious. We noticed a gap between high-quality local eateries and the customers craving their food.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Today, we partner with over 5,000 restaurants nationwide, empowering local businesses while providing an unmatched ordering experience for food lovers everywhere. Our technology ensures that your pizza stays hot and your sushi stays cold.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, borderRadius: 4, height: '100%', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>Speed</Typography>
              <Typography color="text.secondary">We optimize every route to ensure your food arrives exactly when you need it.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, borderRadius: 4, height: '100%', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>Quality</Typography>
              <Typography color="text.secondary">We only partner with top-rated restaurants to guarantee a satisfying meal every time.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, borderRadius: 4, height: '100%', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>Community</Typography>
              <Typography color="text.secondary">We support local economies by giving independent chefs a platform to thrive.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
