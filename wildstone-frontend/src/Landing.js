import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Landing = () => (
  <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#fff', pt: 8 }}>
    <Paper elevation={6} sx={{ p: 6, textAlign: 'center', background: '#232526', borderRadius: 4, minWidth: 400, maxWidth: 800, width: '100%' }}>
      <img src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'} alt="WildStone Solutions Logo" style={{ width: '60%', maxWidth: 400, height: 'auto', marginBottom: 16 }} />
      <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
        WildStone Solutions
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>
        Reporting Excellence
      </Typography>
      <Typography variant="body1" sx={{ color: '#ccc', maxWidth: 500, mx: 'auto' }}>
        Empowering your business with innovative technology and insightful reporting. Discover how we can streamline your workflow, enhance your data, and deliver results.
      </Typography>
    </Paper>
  </Box>
);

export default Landing; 