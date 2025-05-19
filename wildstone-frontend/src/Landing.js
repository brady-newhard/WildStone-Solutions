import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  backgroundColor: '#fff',
  color: 'inherit',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const services = [
  {
    title: 'Construction Reporting',
    description: 'Comprehensive reporting solutions tailored for construction projects, from progress tracking to cost analysis.',
    icon: '📊'
  },
  {
    title: 'Project Analytics',
    description: 'Real-time analytics and insights to optimize construction workflows and resource allocation.',
    icon: '📈'
  },
  {
    title: 'Pay Item Management',
    description: 'Advanced cost tracking and forecasting systems to keep your construction projects on budget.',
    icon: '💰'
  },
  {
    title: 'Document Management',
    description: 'Streamlined document control and reporting for construction permits, inspections, and compliance.',
    icon: '📋'
  }
];

const Landing = () => {
  useEffect(() => {
    document.title = 'WildStone Solutions';
  }, []);

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 'auto', md: '100vh' },
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'center',
          background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 4, md: 0 },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', md: 'center' },
            minHeight: { xs: 'auto', md: '100vh' },
            py: { xs: 4, md: 8 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mt: { xs: 2, md: 0 }
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '0.02em',
                color: '#fff',
              }}
            >
              WildStone Solutions
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#90caf9',
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Construction Reporting Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              We specialize in developing cutting-edge reporting systems for the construction industry. Our solutions help construction companies from the field level to upper management tracking progress, data management, and maintain compliance through powerful analytics and intuitive reporting tools.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#90caf9',
                  '&:hover': {
                    bgcolor: '#64b5f6',
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: '#90caf9',
                    color: '#90caf9',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.15,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
            alt="WildStone Solutions Logo"
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StyledCard sx={{ width: '100%', maxWidth: 400 }}>
                <CardContent>
                  <Typography
                    variant="h1"
                    align="center"
                    sx={{ mb: 2, fontSize: '3rem' }}
                  >
                    {service.icon}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, fontWeight: 600, color: '#90caf9' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: '#000', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                At WildStone Solutions, we're dedicated to revolutionizing construction reporting through innovative technology. Our team combines deep industry knowledge with technical expertise to deliver reporting systems that drive efficiency and profitability in construction projects.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                We understand the unique challenges of construction reporting and have developed solutions that streamline workflows, ensure compliance, and provide actionable insights for better decision-making.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Why Choose Us?
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Construction industry expertise',
                    'Real-time reporting capabilities',
                    'Compliance-focused solutions',
                    'Customizable reporting templates',
                    'Seamless integration with existing systems'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '1rem' }}>
                      <Typography variant="body1">✓ {item}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Get in Touch
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Ready to Start Your Project?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Let's discuss how we can help transform your ideas into reality.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#000',
                  '&:hover': {
                    bgcolor: '#333',
                  },
                }}
              >
                Contact Us
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing; 