import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const ClientPortal = () => (
  <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #232526 0%, #414345 100%)' }}>
    <Paper elevation={6} sx={{ p: 6, minWidth: 350, maxWidth: 500, width: '100%', background: 'rgba(255,255,255,0.97)', borderRadius: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'} alt="WS Symbol" style={{ height: 60, marginBottom: 8 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#232526' }}>
          Client Portal
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        File Upload & Download
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: '#555' }}>
        Securely upload and access your project files here.
      </Typography>
      {/* File upload/download UI will go here */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Billing & Invoices
      </Typography>
      <Typography variant="body2" sx={{ color: '#555' }}>
        View your invoices and billing history.
      </Typography>
      {/* Billing UI will go here */}
    </Paper>
  </Box>
);

export default ClientPortal; 