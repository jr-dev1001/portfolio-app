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
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0a192f 0%, #020c1b 100%)'
            : 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
          transition: 'all 0.3s linear',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                }}
              >
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{ mt: 4 }}
              >
                Check out my work!
              </Button>
            </motion.div>

            {/* Floating objects */}
            <Box
              component={motion.div}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              sx={{
                position: 'absolute',
                right: '10%',
                top: '20%',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                opacity: 0.1,
              }}
            />
            
            <Box
              component={motion.div}
              animate={{
                x: [0, 30, 0],
                rotate: [0, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              sx={{
                position: 'absolute',
                left: '15%',
                bottom: '20%',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(45deg, #ff4081 30%, #00bcd4 90%)',
                borderRadius: '63% 37% 37% 63% / 43% 37% 63% 57%',
                opacity: 0.1,
              }}
            />
          </Box>

          {/* About Section */}
          <Box
            id="about"
            sx={{
              minHeight: '100vh',
              py: 8,
              display: 'flex',
              alignItems: 'center',
            }}
            data-aos="fade-up"
          >
            <Grid container spacing={{ xs: 4, sm: 6, md: 8 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <Box sx={{ maxWidth: { xs: '100%', md: '80%' } }}>
                  <Typography variant="h3" gutterBottom>
                    About Me
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    Hello! My name is Vamsi and I enjoy creating things that live on the internet. 
                    My interest in web development started back in 2018 when I decided to try editing 
                    custom Tumblr themes — turns out hacking together a custom reblog button taught 
                    me a lot about HTML & CSS!
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                    a start-up, a huge corporation, and a student-led design studio. My main focus these 
                    days is building accessible, inclusive products and digital experiences.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Here are a few technologies I've been working with recently:
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {['Machine Learning', 'JavaScript (ES6+)', 'React', 'Node.js', 'Java', 'Python','SpringBoot', 'AWS'].map((tech) => (
                      <Grid item xs={6} key={tech}>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          ▹ {tech}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      '&:before': {
                        transform: 'translate(8px, 8px)',
                      },
                      '& img': {
                        filter: 'none',
                      },
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      border: '2px solid #00bcd4',
                      borderRadius: '4px',
                      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={profilePic}
                    alt="Profile_Pic"
                    sx={{
                      width: { xs: '60%', sm: '50%', md: '40%' },
                      height: 'auto',
                      maxWidth: '300px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Projects Section */}
          <Box id="projects">
            <Projects />
          </Box>

          {/* Contact Section */}
          <Contact />
        </Container>
      </Box>
    </>
  );
};

export default Home;
