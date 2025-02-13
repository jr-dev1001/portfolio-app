import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Import project images
import blogImage from '../assets/blog.png';
import blockchainImage from '../assets/blockchain.png';
import cineCriticImage from '../assets/cinecritic.png';

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain Demo Using Node',
      description: 'A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and sales tracking with beautiful data visualizations.',
      image: blockchainImage,
      demoLink: 'https://jr-dev1001.github.io/Blockchain-Demo-using-Node/',
      githubLink: 'https://github.com/jr-dev1001/Blockchain-Demo-using-Node',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'Cine Critic',
      description: 'An intelligent chat application powered by machine learning. Supports real-time translation, sentiment analysis, and smart responses.',
      image: cineCriticImage,
      demoLink: 'https://tinyurl.com/cinecritic-demo',
      githubLink: 'https://github.com/jr-dev1001/CineCritique',
      tags: ['Angular','Ionic', 'Cordova', 'WebSocket', 'Android']
    },
    {
      title: 'Blog Website',
      description: 'A modern portfolio website. Features smooth animations, responsive design, and dynamic content loading.',
      image: blogImage,
      demoLink: 'https://www.jr-dev1001.xyz/',
      githubLink: 'https://github.com/jr-dev1001/portfolio',
      tags: ['Markdown', 'Jekyll', 'YAML', 'GitHub Pages']
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: (index) => ({
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 15,
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0a192f 0%, #020c1b 100%)'
          : 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
        transition: 'all 0.3s linear',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              mb: { xs: 4, sm: 6, md: 8 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(45deg, #64ffda 30%, #ff79c6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                      background: (theme) => theme.palette.mode === 'dark'
                        ? 'linear-gradient(120deg, rgba(17,34,64,0.95) 0%, rgba(10,25,47,0.95) 100%)'
                        : 'linear-gradient(120deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 100%)',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 50%' }, position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          height: { xs: 200, sm: 300, md: 400 },
                          transition: 'transform 0.3s ease-in-out',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Box sx={{ 
                      flex: { xs: '1 1 auto', md: '0 0 50%' }, 
                      display: 'flex', 
                      flexDirection: 'column',
                      p: { xs: 2, sm: 3, md: 4 },
                    }}>
                      <CardContent sx={{ flex: '1 1 auto' }}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                            mb: { xs: 1, sm: 2 },
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          paragraph 
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            mb: { xs: 2, sm: 3 },
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.tags.map((tag, tagIndex) => (
                            <Typography
                              key={tagIndex}
                              variant="caption"
                              sx={{
                                backgroundColor: 'rgba(0,188,212,0.1)',
                                color: 'primary.main',
                                padding: '4px 12px',
                                borderRadius: '16px',
                                border: '1px solid',
                                borderColor: 'primary.main',
                              }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: { xs: 2, sm: 3, md: 4 }, pt: 0 }}>
                        <Button
                          startIcon={<GitHubIcon />}
                          href={project.githubLink}
                          target="_blank"
                          sx={{
                            mr: 2,
                            color: 'primary.main',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          startIcon={<LaunchIcon />}
                          href={project.demoLink}
                          target="_blank"
                          variant="contained"
                        >
                          Live Demo
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
