import { createTheme } from "@mui/material";

export const darkTheme = (mode) => createTheme({
  palette: {
    mode: mode,
  },
});