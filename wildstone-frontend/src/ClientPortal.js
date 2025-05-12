import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const ClientPortal = () => {
  useEffect(() => {
    document.title = 'Client Portal';
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
        flexDirection: 'column',
        gap: 4,
        overflowX: 'hidden',
        maxWidth: '100vw',
        px: { xs: 3, sm: 4, md: 5 },
        boxSizing: 'border-box',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, sm: 4, md: 6 },
          textAlign: 'center',
          background: '#000',
          borderRadius: 4,
          minWidth: { xs: '0', sm: 300, md: 400 },
          maxWidth: { xs: '90vw', sm: 600, md: 800 },
          width: '100%',
          mx: 'auto',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
          alt="WS Symbol"
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
          Client Portal
        </Typography>
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch', width: '100%', mt: 2, px: { xs: 1, sm: 2 } }}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            textAlign: 'center',
            background: '#000',
            borderRadius: 4,
            minWidth: { xs: '0', sm: 300, md: 400 },
            maxWidth: { xs: '90vw', sm: 600, md: 800 },
            width: '100%',
            mx: 'auto',
            flex: 1,
            overflowX: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#fff',
              fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
            }}
          >
            File Upload & Download
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#ccc',
              maxWidth: { xs: '90vw', sm: 400, md: 500 },
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              mb: 3,
            }}
          >
            Securely upload and access your project files here.
          </Typography>
          {/* File upload/download UI will go here */}
        </Paper>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            textAlign: 'center',
            background: '#000',
            borderRadius: 4,
            minWidth: { xs: '0', sm: 300, md: 400 },
            maxWidth: { xs: '90vw', sm: 600, md: 800 },
            width: '100%',
            mx: 'auto',
            flex: 1,
            overflowX: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#fff',
              fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
            }}
          >
            Billing & Invoices
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
            View your invoices and billing history.
          </Typography>
          {/* Billing UI will go here */}
        </Paper>
      </Box>
    </Box>
  );
};

export default ClientPortal; 