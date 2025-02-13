import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Paper,
  Container
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ toggleColorMode, mode }) => {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: 'transparent',
        pt: { xs: 1, sm: 2 },
        px: { xs: 1, sm: 2 },
        height: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={1}
          sx={{
            borderRadius: '28px',
            background: mode === 'dark' ? 'rgba(10, 25, 47, 0.85)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            py: 1,
            minHeight: 40,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              fontFamily: 'Fira Code',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              fontWeight: 500,
            }}
          >
           <b><i>Welcome to the Void..!</i></b>
          </Typography>
          <IconButton 
            onClick={toggleColorMode} 
            color="inherit"
            sx={{
              ml: 1,
              '&:hover': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Paper>
      </Container>
    </AppBar>
  );
};

export default Navbar;
