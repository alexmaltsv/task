import { Toolbar, AppBar, Typography } from '@mui/material';
import { HeaderLink } from 'components/Header/Header.styled';

export const Header = () => (
  <AppBar
    position="static"
    component="div"
  >
    <Toolbar>
      <HeaderLink to="/">
        <Typography
          variant="h6"
          component="div"
          color="white"
          flexGrow={1}
        >
          Header
        </Typography>
      </HeaderLink>
    </Toolbar>
  </AppBar>
);