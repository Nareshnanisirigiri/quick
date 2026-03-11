import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Button,
  Container,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';

import {
  Search,
  ShoppingCart,
  Person,
  KeyboardArrowDown,
  Menu as MenuIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const { cartCount } = useCart();

  // Desktop Info Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const openInfoMenu = Boolean(anchorEl);

  const handleInfoClick = (event) => setAnchorEl(event.currentTarget);
  const handleInfoClose = () => setAnchorEl(null);

  // Mobile Drawer State
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/restaurants' },
    { label: 'Offers', path: '/offers' },
    { label: 'Contact', path: '/contact' }
  ];

  const infoItems = [
    { label: 'Terms & Policy', path: '/terms-and-conditions' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Delete Account', path: '/delete-account', color: 'error.main' }
  ];

  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '80px' }}>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 }
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="QuickEat Logo"
              sx={{
                height: 45,
                width: 'auto'
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ fontWeight: 600 }}
              >
                {item.label}
              </Button>
            ))}

            {/* Info Dropdown */}
            <Button
              color="inherit"
              onClick={handleInfoClick}
              endIcon={<KeyboardArrowDown />}
              sx={{ fontWeight: 600 }}
            >
              Info
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={openInfoMenu}
              onClose={handleInfoClose}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 150,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }
              }}
            >
              {infoItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={handleInfoClose}
                  sx={{ color: item.color || 'inherit' }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton component={Link} to="/restaurants">
              <Search />
            </IconButton>

            <IconButton component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton component={Link} to="/login">
              <Person />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 }
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>

          {/* Mobile Logo */}
          <Box
            component="img"
            src={logo}
            alt="QuickEat Logo"
            sx={{
              height: 45,
              width: 'auto',
              mb: 2
            }}
          />

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            {infoItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ color: item.color || 'inherit' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;