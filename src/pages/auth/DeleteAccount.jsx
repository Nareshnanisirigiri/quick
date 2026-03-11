import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Warning } from '@mui/icons-material';

const DeleteAccount = () => {
  const [open, setOpen] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState('');

  const handleDelete = () => {
    // Logic to delete account would go here
    alert('Account deletion request submitted. You will be logged out shortly.');
    setOpen(false);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: { xs: 4, md: 5 }, borderRadius: 4, borderTop: '6px solid', borderColor: 'error.main', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Warning color="error" fontSize="large" />
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Delete Account
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ mb: 3, fontWeight: 500 }}>
            We're sorry to see you go. Please read the following important information before proceeding:
          </Typography>

          <Box sx={{ bgcolor: '#FFF5F5', p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="body2" sx={{ mb: 1, color: 'error.dark' }}>• This action is permanent and cannot be undone.</Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'error.dark' }}>• All of your personal data, order history, and saved addresses will be permanently removed.</Typography>
            <Typography variant="body2" sx={{ color: 'error.dark' }}>• Any active orders will be immediately canceled without refund.</Typography>
          </Box>

          <Button 
            variant="outlined" 
            color="error" 
            fullWidth 
            size="large" 
            onClick={() => setOpen(true)}
            sx={{ py: 1.5, fontWeight: 700, borderRadius: 2 }}
          >
            I understand, delete my account
          </Button>
        </Paper>
      </Container>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontWeight: 800 }}>Confirm Account Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            To verify you want to delete your account, please type <strong>DELETE</strong> in the input field below.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            variant="outlined"
            placeholder="Type DELETE here"
            value={confirmationInput}
            onChange={(e) => setConfirmationInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={() => setOpen(false)} sx={{ fontWeight: 600 }}>Cancel</Button>
          <Button 
            onClick={handleDelete} 
            color="error" 
            variant="contained" 
            disabled={confirmationInput !== 'DELETE'}
            sx={{ fontWeight: 700 }}
          >
            Permanently Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteAccount;
