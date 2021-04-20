import React from 'react';
import './HomePage.scss';
import { Paper, Container, Box } from '@material-ui/core';

export const HomePage = () => (
  <section>
    <Paper>
      <Container fixed>
        <Box
          className="header__logo-title"
        >
          Product App
        </Box>
      </Container>
    </Paper>
  </section>
);
