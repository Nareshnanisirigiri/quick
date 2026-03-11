import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Button, Divider } from '@mui/material';
import { Add, Remove, DeleteOutline, ArrowForward } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const deliveryFee = cartItems.length > 0 ? 5.99 : 0;

  if (cartItems.length === 0) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Your Cart is Empty</Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>Looks like you haven't added anything to your cart yet.</Typography>
        <Button component={Link} to="/restaurants" variant="contained" color="primary" size="large">
          Browse Restaurants
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, bgcolor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Shopping Cart</Typography>
        
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            {cartItems.map((item) => (
              <Paper key={item.id} sx={{ p: 3, mb: 3, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box component="img" src={item.image} alt={item.name} sx={{ width: 100, height: 100, borderRadius: 2, objectFit: 'cover' }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>${item.price.toFixed(2)}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'grey.100', borderRadius: 8 }}>
                  <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Remove fontSize="small" /></IconButton>
                  <Typography sx={{ px: 2, fontWeight: 700 }}>{item.quantity}</Typography>
                  <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Add fontSize="small" /></IconButton>
                </Box>
                <IconButton color="error" onClick={() => removeFromCart(item.id)} sx={{ bgcolor: '#FFF5F5' }}>
                  <DeleteOutline />
                </IconButton>
              </Paper>
            ))}
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 4, borderRadius: 4, position: 'sticky', top: 100 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Order Summary</Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography sx={{ fontWeight: 600 }}>${cartTotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography color="text.secondary">Delivery Fee</Typography>
                <Typography sx={{ fontWeight: 600 }}>${deliveryFee.toFixed(2)}</Typography>
              </Box>
              
              <Divider sx={{ mb: 3 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Total</Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  ${(cartTotal + deliveryFee).toFixed(2)}
                </Typography>
              </Box>
              
              <Button component={Link} to="/checkout" variant="contained" fullWidth size="large" endIcon={<ArrowForward />} sx={{ py: 2, borderRadius: 2, fontWeight: 700 }}>
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartPage;
