import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { Star, AccessTime, LocationOn } from '@mui/icons-material';

const RestaurantCard = ({ image, name, rating, time, distance, status, category }) => {
  return (
    <Card 
      sx={{ 
        borderRadius: 4, 
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(255, 42, 35, 0.15)',
        }
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
        <Chip 
          label={status} 
          color={status === 'Open' ? 'success' : 'error'} 
          size="small" 
          sx={{ fontWeight: 'bold' }} 
        />
      </Box>
      <CardMedia
        component="img"
        height="200"
        image={image || 'https://via.placeholder.com/400x200'}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'primary.main', color: 'white', px: 1, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 0.5 }}>{rating}</Typography>
            <Star fontSize="small" sx={{ fontSize: 14 }} />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{category}</Typography>
        
        <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTime fontSize="small" />
            <Typography variant="body2">{time}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOn fontSize="small" />
            <Typography variant="body2">{distance}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
