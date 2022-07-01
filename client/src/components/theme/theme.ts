import { createTheme } from '@mui/material';

const defaultTheme = createTheme();
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        background: defaultTheme.palette.grey.A100,
      },
    },
  },
});