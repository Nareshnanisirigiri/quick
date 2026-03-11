import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#5f0404", color: 'white', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>
              Day Catch
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2, pr: 4 }}>
              The best food delivery service in town. Get your favorite meals delivered fresh and fast right to your doorstep.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}><Facebook /></IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}><Twitter /></IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}><Instagram /></IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}><LinkedIn /></IconButton>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Company</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/about-us" color="grey.400" underline="hover">About Us</MuiLink>
              <MuiLink component={Link} to="/careers" color="grey.400" underline="hover">Careers</MuiLink>
              <MuiLink component={Link} to="/blog" color="grey.400" underline="hover">Blog</MuiLink>
              <MuiLink component={Link} to="/contact" color="grey.400" underline="hover">Contact</MuiLink>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Services & Legal</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/terms-and-conditions" color="grey.400" underline="hover">Terms of Service</MuiLink>
              <MuiLink component={Link} to="/privacy-policy" color="grey.400" underline="hover">Privacy Policy</MuiLink>
              <MuiLink component={Link} to="/delete-account" color="grey.400" underline="hover">Delete Account</MuiLink>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Subscribe to Newsletter</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2 }}>
              Get the latest updates and special offers directly to your inbox.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid', borderColor: 'grey.800', mt: 6, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="grey.500">
            &copy; {new Date().getFullYear()} QuickEat. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
