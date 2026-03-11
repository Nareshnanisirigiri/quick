import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF2A23',
    },
    secondary: {
      main: '#3E3E3E',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#3E3E3E',
    },
    error: {
      main: '#FF2A23',
    },
    action: {
      hover: '#ffeaeb',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 42, 35, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;
