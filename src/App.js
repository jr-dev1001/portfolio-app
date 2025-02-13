import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chatbot from './components/Chatbot';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
          },
          secondary: {
            main: '#f50057',
            light: '#ff4081',
            dark: '#c51162',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#1a1a1a',
            secondary: '#666666',
          },
        }
      : {
          primary: {
            main: '#64ffda',
            light: '#9effff',
            dark: '#14cba8',
          },
          secondary: {
            main: '#ff79c6',
            light: '#ffa9f9',
            dark: '#c94f95',
          },
          background: {
            default: '#0a192f',
            paper: '#112240',
          },
          text: {
            primary: '#e6f1ff',
            secondary: '#8892b0',
          },
        }),
  },
  typography: {
    fontFamily: '"Fira Code", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
      background: mode === 'dark' 
        ? 'linear-gradient(45deg, #64ffda 30%, #ff79c6 90%)'
        : 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
      color: mode === 'dark' ? '#64ffda' : '#2196f3',
    },
    h6: {
      fontFamily: '"Fira Code", monospace',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
          overflowX: 'hidden',
          '& #root': {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Navbar toggleColorMode={toggleColorMode} mode={mode} />
        <Box
          component="main"
          sx={{
            flex: 1,
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          <Home />
        </Box>
        <Chatbot />
      </Box>
    </ThemeProvider>
  );
}

export default App;
