import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbar = ({ toggleColorMode, mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['home', 'about', 'projects', 'contact'];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item}>
          <Button
            component={ScrollLink}
            to={item}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleDrawerToggle}
            sx={{
              color: 'text.primary',
              width: '100%',
              justifyContent: 'center',
              py: 1,
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled 
            ? mode === 'dark' 
              ? 'rgba(17, 34, 64, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          boxShadow: isScrolled ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: isScrolled 
                ? 'text.primary'
                : mode === 'dark' ? 'white' : 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            <h3>This site is waiting for your arrival</h3>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              onClick={toggleColorMode} 
              sx={{
                color: mode === 'dark' ? 'white' : 'text.primary',
                mr: { xs: 1, sm: 2 },
              }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: mode === 'dark' ? 'white' : 'text.primary',
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  PaperProps={{
                    sx: {
                      width: 240,
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box>
                {navItems.map((section) => (
                  <Button
                    key={section}
                    component={ScrollLink}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    sx={{
                      color: isScrolled 
                        ? 'text.primary'
                        : mode === 'dark' ? 'white' : 'text.primary',
                      mx: { sm: 0.5, md: 1 },
                      px: { sm: 1, md: 2 },
                      fontSize: { sm: '0.8rem', md: '0.9rem' },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
