import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Rating, Divider, Chip } from '@mui/material';
import { Add, Remove, ShoppingCart, ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Mock food data - in a real app, this would be fetched based on the ID
  const food = {
    id: id,
    name: 'Classic Cheeseburger',
    price: 9.99,
    rating: 4.8,
    reviews: 128,
    description: 'Our classic cheeseburger is made with a 100% pure beef patty, seasoned with just a pinch of salt and pepper, and topped with a slice of melted cheese, pickles, minced onions, mustard, and ketchup on a toasted bun. It contains no artificial flavors, preservatives, or added colors from artificial sources.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Fast Food',
    calories: '550 kcal',
    weight: '250g'
  };

  const handleAddToCart = () => {
    addToCart(food, quantity);
  };

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)} 
          sx={{ mb: 4, fontWeight: 600 }}
          color="inherit"
        >
          Back
        </Button>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              component="img" 
              src={food.image} 
              alt={food.name}
              sx={{ 
                width: '100%', 
                borderRadius: 8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                objectFit: 'cover',
                maxHeight: 500
              }}
            />
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip label={food.category} color="primary" sx={{ mb: 2, fontWeight: 700, borderRadius: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>{food.name}</Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Rating value={food.rating} precision={0.1} readOnly />
              <Typography variant="body2" color="text.secondary">({food.reviews} Customer Reviews)</Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 3 }}>
              ${food.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              {food.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="caption" color="text.secondary">Calories</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{food.calories}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Weight</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{food.weight}</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F8F9FA', borderRadius: 8, p: 0.5, border: '1px solid', borderColor: 'grey.200' }}>
                <IconButton size="small" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Remove /></IconButton>
                <Typography sx={{ px: 3, fontWeight: 800 }}>{quantity}</Typography>
                <IconButton size="small" onClick={() => setQuantity(quantity + 1)}><Add /></IconButton>
              </Box>
              
              <Button 
                variant="contained" 
                size="large" 
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                sx={{ 
                  py: 2, 
                  px: 4, 
                  borderRadius: 3, 
                  fontWeight: 700,
                  boxShadow: '0 8px 16px rgba(255, 42, 35, 0.2)'
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FoodDetails;
