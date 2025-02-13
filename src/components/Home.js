import React, { useEffect } from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import profilePic from '../assets/avataaars.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0a192f 0%, #020c1b 100%)'
            : 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
          transition: 'all 0.3s linear',
          color: 'text.primary',
          pt: 8,
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Hero Content */}
          <Box
            sx={{
              minHeight: 'calc(100vh - 64px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', maxWidth: '800px' }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: (theme) => theme.palette.mode === 'dark'
                    ? theme.palette.primary.light
                    : theme.palette.primary.main,
                  fontFamily: 'Fira Code',
                  mb: 2,
                  transition: 'color 0.3s linear',
                }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                }}
              >
                Vamsi Surakarapu
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                }}
              >
                I build things for the web.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: '600px',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  mb: 4,
                  mx: 'auto',
                  px: 2,
                }}
              >
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                sx={{ mt: 4 }}
              >
                Check out my work!
              </Button>
            </motion.div>

            {/* Floating objects with contained animations */}
            <Box
              component={motion.div}
              animate={{
                y: [-10, 10],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              sx={{
                position: 'absolute',
                right: { xs: '5%', sm: '10%' },
                top: '20%',
                width: { xs: '100px', sm: '150px' },
                height: { xs: '100px', sm: '150px' },
                background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                opacity: 0.1,
                pointerEvents: 'none',
              }}
            />
            
            <Box
              component={motion.div}
              animate={{
                x: [-10, 10],
                rotate: [0, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              sx={{
                position: 'absolute',
                left: { xs: '5%', sm: '15%' },
                bottom: '20%',
                width: { xs: '80px', sm: '100px' },
                height: { xs: '80px', sm: '100px' },
                background: 'linear-gradient(45deg, #ff4081 30%, #00bcd4 90%)',
                borderRadius: '63% 37% 37% 63% / 43% 37% 63% 57%',
                opacity: 0.1,
                pointerEvents: 'none',
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        component="section"
        id="about"
        sx={{
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #020c1b 0%, #0a192f 100%)'
            : 'linear-gradient(180deg, #e0e0e0 0%, #f5f5f5 100%)',
          py: { xs: 8, sm: 10, md: 15 },
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, sm: 6, md: 8 }} 
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              <Box sx={{ maxWidth: { xs: '100%', md: '90%' } }}>
                <Typography 
                  variant="h3" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    mb: 4,
                  }}
                >
                  About Me
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.7,
                  }}
                >
                  Hello! My name is Vamsi and I enjoy creating things that live on the internet. 
                  My interest in web development started back in 2018 when I decided to try editing 
                  custom Tumblr themes — turns out hacking together a custom reblog button taught 
                  me a lot about HTML & CSS!
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.7,
                  }}
                >
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                  a start-up, a huge corporation, and a student-led design studio. My main focus these 
                  days is building accessible, inclusive products and digital experiences.
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    mb: 3,
                  }}
                >
                  Here are a few technologies I've been working with recently:
                </Typography>
                <Grid 
                  container 
                  spacing={2}
                >
                  {['Machine Learning', 'JavaScript (ES6+)', 'React', 'Node.js', 'Java', 'Python', 'SpringBoot', 'AWS'].map((tech) => (
                    <Grid item xs={6} sm={4} key={tech}>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          '&:before': {
                            content: '"▹"',
                            marginRight: '10px',
                            color: 'primary.main',
                          },
                        }}
                      >
                        {tech}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: 'fit-content',
                  '&:hover': {
                    '& .profile-img': {
                      filter: 'none',
                      transform: 'translateY(-10px)',
                    },
                    '& .profile-img-bg': {
                      transform: 'translate(8px, 8px)',
                    },
                  },
                }}
              >
                <Box
                  className="profile-img"
                  component="img"
                  src={profilePic}
                  alt="Profile"
                  sx={{
                    width: { xs: '250px', sm: '300px', md: '350px' },
                    height: 'auto',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: '10px',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 10px 30px -15px rgba(2,12,27,0.7)'
                      : '0 10px 30px -15px rgba(0,0,0,0.2)',
                  }}
                />
                <Box
                  className="profile-img-bg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 0,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </Box>
  );
};

export default Home;
