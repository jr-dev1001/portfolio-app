import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #020c1b 0%, #0a192f 100%)'
          : 'linear-gradient(180deg, #e0e0e0 0%, #f5f5f5 100%)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          Get In Touch
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: '600px',
              mb: 2,
            }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </Typography>

          {/* Social Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 2,
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
              <GitHubIcon sx={{ fontSize: '2rem' }} />
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
              <LinkedInIcon sx={{ fontSize: '2rem' }} />
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
            }}
          >
            Send Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
