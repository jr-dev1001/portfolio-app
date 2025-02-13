import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
        body: {
          transition: 'all 0.3s linear',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s linear',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontFamily: '"Fira Code", monospace',
          padding: '10px 20px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: mode === 'dark'
            ? 'linear-gradient(45deg, #64ffda 30%, #ff79c6 90%)'
            : 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
          boxShadow: mode === 'dark'
            ? '0 3px 5px 2px rgba(100, 255, 218, .3)'
            : '0 3px 5px 2px rgba(33, 150, 243, .3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s linear',
          backgroundColor: mode === 'dark' ? '#112240' : '#fff',
          boxShadow: mode === 'dark'
            ? '0 10px 30px -15px rgba(2,12,27,0.7)'
            : '0 10px 30px -15px rgba(0,0,0,0.1)',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: mode === 'dark'
              ? '0 20px 30px -15px rgba(2,12,27,0.7)'
              : '0 20px 30px -15px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': {
            transition: 'all 0.3s linear',
          },
          body: {
            transition: 'background-color 0.3s linear',
          },
        }}
      />
      <Navbar toggleColorMode={toggleColorMode} mode={mode} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
