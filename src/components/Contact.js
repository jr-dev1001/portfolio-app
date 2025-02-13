import React from 'react';
import { Container, Typography, Box, Button, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, sm: 10, md: 15 },
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #020c1b 0%, #0a192f 100%)'
          : 'linear-gradient(180deg, #e0e0e0 0%, #f5f5f5 100%)',
        transition: 'all 0.3s linear',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                background: (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #64ffda 30%, #ff79c6 90%)'
                  : 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                color: 'text.secondary',
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 2, sm: 3 },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    mb: 1,
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  <EmailIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} color="primary" />
                  jrdev1001@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, sm: 3 },
                  justifyContent: 'center',
                  mb: { xs: 3, sm: 4 },
                }}
              >
                <IconButton
                  component="a"
                  href="https://github.com/jr-dev1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/jr-dev1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:jrdev1001@gmail.com"
                sx={{
                  py: { xs: 1, sm: 1.5 },
                  px: { xs: 3, sm: 4 },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                Send Email
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
