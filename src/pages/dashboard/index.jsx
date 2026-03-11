import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Button
} from "@mui/material";

import {
  Person,
  ShoppingBag,
  LocationOn,
  Favorite,
  Warning
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "My Profile", icon: <Person /> },
    { id: "orders", label: "My Orders", icon: <ShoppingBag /> },
    { id: "addresses", label: "Saved Addresses", icon: <LocationOn /> },
    { id: "favorites", label: "Favorite Restaurants", icon: <Favorite /> }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#F8F9FA", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
          My Account
        </Typography>

        <Grid container spacing={4}>

          {/* LEFT SIDEBAR */}

          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2, borderRadius: 4, mb: 3 }}>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    bgcolor: "primary.main"
                  }}
                >
                  JD
                </Avatar>

                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  John Doe
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  john.doe@example.com
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <List component="nav">
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor:
                        activeTab === item.id ? "action.hover" : "transparent",
                      color:
                        activeTab === item.id ? "primary.main" : "inherit"
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          activeTab === item.id
                            ? "primary.main"
                            : "inherit",
                        minWidth: 40
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight:
                          activeTab === item.id ? 700 : 500
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 1 }} />

              {/* DELETE ACCOUNT */}

              <List>
                <ListItem
                  button
                  component={Link}
                  to="/delete-account"
                  sx={{
                    borderRadius: 2,
                    color: "error.main",
                    mt: 1
                  }}
                >
                  <ListItemIcon sx={{ color: "error.main", minWidth: 40 }}>
                    <Warning />
                  </ListItemIcon>

                  <ListItemText
                    primary="Delete Account"
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItem>
              </List>

            </Paper>
          </Grid>

          {/* RIGHT CONTENT */}

          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 4, borderRadius: 4, minHeight: 400 }}>

              {activeTab === "profile" && (
                <Box>

                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Profile Information
                  </Typography>

                  <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">
                        Full Name
                      </Typography>

                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                        John Doe
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">
                        Email Address
                      </Typography>

                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                        john.doe@example.com
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">
                        Phone Number
                      </Typography>

                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                        +1 234 567 8900
                      </Typography>
                    </Grid>

                  </Grid>

                  <Button variant="outlined" sx={{ mt: 2 }}>
                    Edit Profile
                  </Button>

                </Box>
              )}

              {activeTab !== "profile" && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 300
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Nothing to show here yet.
                  </Typography>
                </Box>
              )}

            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;