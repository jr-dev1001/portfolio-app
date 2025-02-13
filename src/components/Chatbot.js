import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Fade,
  Button,
  Divider,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';

const jumpAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const initialQuestions = [
  {
    id: 1,
    question: "What is your educational background?",
    answer: "I completed my B.Tech in Computer Science and Engineering with a CGPA of 8.7. I'm also ISC2 Certified in Cybersecurity, Machine Learning certified by Udemy, and AWS Foundations certified by Amazon."
  },
  {
    id: 2,
    question: "What are your areas of expertise?",
    answer: "I specialize in Full Stack Development with Machine Learning. My expertise spans across web development, AI/ML integration, cybersecurity, and blockchain technologies including Solana (Rust) and Ethereum (Solidity)."
  },
  {
    id: 3,
    question: "What certifications do you have?",
    answer: "I hold multiple certifications: ISC2 Certification in Cybersecurity, Machine Learning certification from Udemy, and AWS Foundations certification from Amazon."
  },
  {
    id: 4,
    question: "What are your interests outside of work?",
    answer: "I'm a big anime enthusiast and love watching anime in my free time. I also enjoy playing snooker, which helps me unwind and stay focused."
  },
  {
    id: 5,
    question: "What kind of projects do you work on?",
    answer: "I work on full-stack web applications that integrate machine learning capabilities and blockchain technologies. My projects combine modern web technologies with AI/ML, and I've worked with both Solana (Rust) and Ethereum (Solidity) blockchain platforms."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState(initialQuestions);
  const [history, setHistory] = useState([]);
  const [showStartOver, setShowStartOver] = useState(false);
  const chatContentRef = useRef(null);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [history]);

  const handleQuestionClick = (selectedQuestion) => {
    setHistory([...history, selectedQuestion]);
    setQuestions(questions.filter(q => q.id !== selectedQuestion.id));
    
    if (questions.length === 1) {
      setShowStartOver(true);
    }
  };

  const handleStartOver = () => {
    setQuestions(initialQuestions);
    setHistory([]);
    setShowStartOver(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuestions(initialQuestions);
    setHistory([]);
    setShowStartOver(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Fade in={!isOpen}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 1 
        }}>
          <Typography
            variant="caption"
            sx={{
              color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
              fontWeight: 'bold',
              animation: `${jumpAnimation} 1s ease-in-out infinite`,
              textAlign: 'center',
              backgroundColor: (theme) => theme.palette.mode === 'dark' 
                ? 'rgba(17, 34, 64, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)',
              padding: '4px 12px',
              borderRadius: '12px',
              boxShadow: (theme) => theme.palette.mode === 'dark'
                ? '0 2px 8px rgba(100, 255, 218, 0.2)'
                : '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: (theme) => theme.palette.mode === 'dark'
                ? '1px solid rgba(100, 255, 218, 0.2)'
                : 'none',
            }}
          >
            Talk to Jr Vam
          </Typography>
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
              },
              width: 56,
              height: 56,
              boxShadow: 3,
            }}
          >
            <ChatIcon />
          </IconButton>
        </Box>
      </Fade>

      <Collapse in={isOpen}>
        <Paper
          elevation={4}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 320,
            maxHeight: 480,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              bgcolor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">
              👻👻Jr Vam here.👻👻
            </Typography>
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat Content */}
          <Box 
            ref={chatContentRef}
            sx={{ 
              height: 400, 
              overflow: 'auto', 
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {/* Chat History */}
            {history.map((item, index) => (
              <Box key={item.id}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    bgcolor: 'grey.100',
                    color: 'text.primary',
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: '90%',
                    mb: 1
                  }}
                >
                  {item.question}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: '90%',
                    ml: 'auto',
                    mb: 2
                  }}
                >
                  {item.answer}
                </Typography>
              </Box>
            ))}

            {/* Remaining Questions or Start Over */}
            {history.length > 0 && questions.length > 0 && (
              <Divider sx={{ my: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  More Questions
                </Typography>
              </Divider>
            )}

            {showStartOver ? (
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  mt: 2 
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleStartOver}
                  sx={{ minWidth: 120 }}
                >
                  Start Over?
                </Button>
              </Box>
            ) : (
              <List sx={{ p: 0 }}>
                {questions.map((q) => (
                  <ListItem
                    key={q.id}
                    sx={{
                      bgcolor: 'background.paper',
                      mb: 1,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                      cursor: 'pointer',
                      border: 1,
                      borderColor: 'divider',
                    }}
                    onClick={() => handleQuestionClick(q)}
                  >
                    <ListItemText 
                      primary={q.question}
                      primaryTypographyProps={{
                        sx: { fontWeight: 500 }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default Chatbot;
