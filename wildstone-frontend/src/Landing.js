import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Landing = () => {
  useEffect(() => {
    document.title = 'WildStone Solutions';
  }, []);

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: '#fff',
        pt: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, sm: 4, md: 6 },
          textAlign: 'center',
          background: '#000',
          borderRadius: 4,
          minWidth: { xs: '90vw', sm: 300, md: 400 },
          maxWidth: { xs: '98vw', sm: 600, md: 800 },
          width: '100%',
          mx: { xs: 1, sm: 'auto' },
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
          alt="WildStone Solutions Logo"
          style={{
            width: '70%',
            maxWidth: 300,
            minWidth: 120,
            height: 'auto',
            marginBottom: 16,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          WildStone Solutions
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: '#fff',
            fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
          }}
        >
          Reporting Excellence
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#ccc',
            maxWidth: { xs: '90vw', sm: 400, md: 500 },
            mx: 'auto',
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
          }}
        >
          Empowering your business with innovative technology and insightful reporting. Discover how we can streamline your workflow, enhance your data, and deliver results.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Landing; 