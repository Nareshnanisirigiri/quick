import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, IconButton } from '@mui/material';
import { LocationOn, Phone, Email, Send } from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F8F9FA', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'red' }}>
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Have a question, feedback, or need assistance? We're here to help! Reach out to our customer support team.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <Box sx={{ bgcolor: 'rgba(255, 42, 35, 0.1)', p: 2, borderRadius: '50%', color: 'primary.main', display: 'flex' }}>
                  <LocationOn fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Our Office</Typography>
                  <Typography variant="body2" color="text.secondary">VN AQUA RAS PRIVATE LIMITED <br/> H NO: 249, BDL HOUSING SOCIETY, <br/> MAC SOCIETY, NEAR ESI, RAMACHANDRAPURAM,<br/> ,Medak-502032,Telangana<br/>India </Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <Box sx={{ bgcolor: 'rgba(62, 62, 62, 0.1)', p: 2, borderRadius: '50%', color: 'secondary.main', display: 'flex' }}>
                  <Phone fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Call Us</Typography>
                  <Typography variant="body2" color="text.secondary"> +91 9866889788<br/>Mon-Sun: 9:00 AM - 10:00 PM</Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <Box sx={{ bgcolor: 'rgba(76, 175, 80, 0.1)', p: 2, borderRadius: '50%', color: '#4CAF50', display: 'flex' }}>
                  <Email fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Email Us</Typography>
                  <Typography variant="body2" color="text.secondary">info@daycatchgmail.com<br/>info@daycatchgmail.com</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)', height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
                Send us a message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      fullWidth 
                      label="Your Name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined" 
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      fullWidth 
                      type="email" 
                      label="Email Address" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined" 
                      required
                    />
                  </Grid>
                </Grid>
                <TextField 
                  fullWidth 
                  label="Subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined" 
                  required
                />
                <TextField 
                  fullWidth 
                  label="Message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined" 
                  multiline 
                  rows={4} 
                  required
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="red" 
                  size="large" 
                  endIcon={<Send />}
                  sx={{ py: 1.5, mt: 2, fontWeight: 700, borderRadius: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
