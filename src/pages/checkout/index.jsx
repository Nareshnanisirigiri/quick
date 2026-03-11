import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const deliveryFee = 5.99;
  
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <Box sx={{ py: 8, bgcolor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Checkout</Typography>
        
        <form onSubmit={handlePlaceOrder}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Delivery Address */}
              <Paper sx={{ p: 4, borderRadius: 4, mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Delivery Address</Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="First Name" required variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Last Name" required variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Street Address" required variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="City" required variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Phone Number" required variant="outlined" />
                  </Grid>
                </Grid>
              </Paper>

              {/* Payment Method */}
              <Paper sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Payment Method</Typography>
                <FormControl component="fieldset">
                  <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <FormControlLabel value="card" control={<Radio color="primary" />} label="Credit / Debit Card" />
                    <FormControlLabel value="paypal" control={<Radio color="primary" />} label="PayPal" />
                    <FormControlLabel value="cash" control={<Radio color="primary" />} label="Cash on Delivery" />
                  </RadioGroup>
                </FormControl>
                
                {paymentMethod === 'card' && (
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Card Number" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField fullWidth label="Expiry Date (MM/YY)" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField fullWidth label="CVV" variant="outlined" />
                    </Grid>
                  </Grid>
                )}
              </Paper>
            </Grid>

            {/* Order Summary */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 4, borderRadius: 4, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Your Order</Typography>
                
                {cartItems.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{item.name} x {item.quantity}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                  </Box>
                ))}
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>${cartTotal.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Delivery Fee</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>${deliveryFee.toFixed(2)}</Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Total</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    ${(cartTotal + deliveryFee).toFixed(2)}
                  </Typography>
                </Box>
                
                <Button type="submit" variant="contained" fullWidth size="large" sx={{ py: 2, borderRadius: 2, fontWeight: 700 }}>
                  Place Order
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
