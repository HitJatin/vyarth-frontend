import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./LandingPage.css"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://vyarth.com/">
        vyarth.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Vy-Arth - Bekaar to Sweekar
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Vy-Arth
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Things which are useless for you can be useful for others.<br />
              Exchange your waste products for exclusive rewards.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='/home'>Join the initiative to make our world cleaner</Button>
            </Stack>
          </Container>
        </Box>
        <div className='imageWithInfoProcess'>
          <div className='imageLayout'>
            <img className='startPageImages' src="/images/waste.jpg" />
            <ArrowRightAltIcon className='rightArrow' />
            <img className='startPageImages' src="/images/reward_coins.jpg" />
          </div>
          <div className='info'>Get Reward Coins for disposing waste</div>
        </div>
        <div className='imageWithInfoProcess'>
          <div className='imageLayout'>
            <img className='startPageImages' src="/images/reward_coins.jpg" />
            <ArrowRightAltIcon className='rightArrow' />
            <img className='startPageImages' src="/images/rewards.png" />
          </div>
          <div className='info'>Use your Reward coins to redeem exclusive deals</div>
        </div>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}