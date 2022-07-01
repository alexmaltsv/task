import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Header } from 'components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <Grid
    container
    minWidth={1024}
  >
    <Header />

    <Grid
      container
      padding={4}
      minWidth={1024}
      maxWidth={1400}
      margin="auto"
    >
      {children}
    </Grid>
  </Grid>
);