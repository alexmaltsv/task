import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export const Preloader = () => (
  <Box
    flex={1}
    display="flex"
    alignItems="center"
    justifyContent={'center'}
  >
    <CircularProgress />
  </Box>
);