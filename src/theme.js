import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF2A23",
    },
    secondary: {
      main: "#1E293B",
    },
    background: {
      default: "#F8FAFC",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;