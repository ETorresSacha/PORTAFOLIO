import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: orange[800],
    },
  },
});
export default theme
