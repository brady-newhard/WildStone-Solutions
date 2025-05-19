import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText, Link, Divider, Chip, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const skills = [
  { label: 'Programming Languages', value: 'JavaScript, Python, HTML, CSS' },
  { label: 'Frameworks & Libraries', value: 'React, Node.js, Express.js' },
  { label: 'Databases', value: 'MongoDB, Django' },
  { label: 'Version Control', value: 'GitHub' },
  { label: 'Tools', value: 'VS Code, Postman, Cursor' },
  { label: 'Concepts', value: 'REST APIs, Responsive Design, Database Management' },
];

const projects = [
  {
    title: 'Web Browser Based Game',
    link: 'https://bradynewhard.github.io/little-mermaid-memory/',
    repo: 'https://github.com/bradynewhard/little-mermaid-memory',
    description: [
      'Developed an interactive memory-matching game using JavaScript, HTML, and CSS, leveraging the DOM API for real-time updates.',
      'Designed a fully responsive user interface with CSS Grid and Flexbox, ensuring a smooth experience across devices.',
      'Implemented event listeners and state management to track user selections, enhance gameplay mechanics, and prevent duplicate choices.',
      'Deployed using GitHub Pages, making the game publicly accessible and mobile-friendly.'
    ]
  },
  {
    title: 'CRUD RESTful App',
    link: 'https://the-craft-beer-collective.herokuapp.com/',
    repo: 'https://github.com/bradynewhard/the-craft-beer-collective',
    description: [
      'Developed a full-stack MERN application enabling users to discover and share craft beers.',
      'Implemented authentication, MongoDB for database storage, and Express.js for RESTful API handling.',
      'Designed an interactive UI using React with React Router to enhance user experience.',
      'Deployed using Heroku, ensuring a seamless online experience.'
    ]
  }
];

const education = [
  'General Assembly Software Engineering Bootcamp (May 2025)',
  'Bachelors of Science in Civil Engineering, Iowa State University, Ames, IA (2004)',
  'Engineer in Training (License #EIT022217)'
];

const experience = [
  {
    title: 'Lead Environmental Inspector',
    company: 'Triple H Enterprises | QIS | NRG | AK Environmental',
    years: '2011 - Present',
    bullets: [
      'Analyzed large datasets using Excel, GIS tools, and structured reporting, comparable to database management and API integrations.',
      'Led cross-functional team collaboration, applying Agile principles to ensure regulatory compliance and workflow optimization.',
      'Developed automated reporting systems, improving efficiency and reducing manual work—skills relevant to data visualization and scripting.',
      'Managed survey data and spatial analysis, strengthening problem-solving, debugging, and structured data handling.',
      'Created technical documentation and ensured accuracy in compliance reports, demonstrating attention to detail and structured problem-solving, similar to software documentation.'
    ]
  },
  {
    title: 'Civil Engineer',
    company: 'G.A. Covey Engineering | Littlejohn Engineering Associates | Gaskins Surveying and Engineering Co',
    years: '2004 – 2011',
    bullets: [
      'Applied data analysis, structured problem-solving, and technical documentation to optimize engineering projects, similar to database management and API integration in web development.',
      'Designed and implemented process improvements using Excel, GIS, AutoCAD, and other design software enhancing workflows—skills transferable to data visualization and front-end development.',
      'Developed technical reports and specifications, comparable to writing software documentation and system requirements.',
      'Led cross-functional teams and collaborated with stakeholders, demonstrating project management and Agile workflow experience.'
    ]
  }
];

export default function Profile() {
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 7, sm: 9 }, py: 6, bgcolor: '#000', color: '#fff', minHeight: '100vh', borderRadius: 4, boxShadow: 3 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Avatar
          alt="Brady R. Newhard"
          src={process.env.PUBLIC_URL + '/images/profile.jpg'}
          sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 3, border: '4px solid #fff' }}
        />
        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: '#fff' }}>
          Brady R. Newhard, E.I.T.
        </Typography>
        <Typography variant="h5" color="#ccc" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="body1" color="#ccc">
          Huttonsville, WV &bull; 615.934.0239
        </Typography>
        <Box mt={1}>
          <Link href="mailto:bnewhard@wildstonesolutions.com" underline="hover" sx={{ mx: 1, color: '#fff' }}>bnewhard@wildstonesolutions.com</Link>
          <Link href="https://github.com/bradynewhard" target="_blank" underline="hover" sx={{ mx: 1, color: '#fff' }}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/bradynewhard/" target="_blank" underline="hover" sx={{ mx: 1, color: '#fff' }}>LinkedIn</Link>
        </Box>
      </Box>
      <Divider sx={{ mb: 4, bgcolor: '#444' }} />
      {/* Summary */}
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>Summary</Typography>
      <Typography variant="body1" color="#ccc" mb={3}>
        Detail-oriented and highly motivated Software Engineer with a background in civil engineering and construction, transitioning into web development. Passionate about solving complex problems and building scalable web applications using JavaScript (React, Node.js). Strong analytical and collaboration skills from working in engineering teams on large-scale projects. Excited to contribute to a fast-paced engineering team and take on impactful initiatives while continuously learning and growing in a dynamic environment.
      </Typography>
      {/* Skills */}
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>Technical Skills</Typography>
      <Grid container spacing={2} mb={3}>
        {skills.map((skill, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ color: '#fff' }}>{skill.label}:</Typography>
            <Typography variant="body2" color="#ccc">{skill.value}</Typography>
          </Grid>
        ))}
      </Grid>
      {/* Projects */}
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>Projects</Typography>
      <Grid container spacing={3} mb={3}>
        {projects.map((proj, idx) => (
          <Grid item xs={12} key={idx}>
            <Card variant="outlined" sx={{ mb: 2, bgcolor: '#111', color: '#fff', border: '1px solid #444' }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#fff' }}>
                  <Link href={proj.link} target="_blank" underline="hover" sx={{ color: '#fff' }}>{proj.title}</Link>
                  {proj.repo && (
                    <Link href={proj.repo} target="_blank" underline="none" sx={{ ml: 2, fontSize: 14, color: '#ccc' }}>
                      [GitHub]
                    </Link>
                  )}
                </Typography>
                <List dense>
                  {proj.description.map((desc, i) => (
                    <ListItem key={i} sx={{ pl: 0 }}>
                      <ListItemText primary={desc} primaryTypographyProps={{ color: '#ccc' }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Education */}
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>Education & Licensing</Typography>
      <List dense sx={{ mb: 3 }}>
        {education.map((ed, idx) => (
          <ListItem key={idx} sx={{ pl: 0 }}>
            <ListItemText primary={ed} primaryTypographyProps={{ color: '#ccc' }} />
          </ListItem>
        ))}
      </List>
      {/* Experience */}
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>Professional Experience</Typography>
      <Grid container spacing={3}>
        {experience.map((exp, idx) => (
          <Grid item xs={12} key={idx}>
            <Card variant="outlined" sx={{ bgcolor: '#111', color: '#fff', border: '1px solid #444' }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#fff' }}>
                  {exp.title} <Chip label={exp.years} size="small" sx={{ ml: 1, bgcolor: '#222', color: '#fff', border: '1px solid #444' }} />
                </Typography>
                <Typography variant="subtitle2" color="#ccc" gutterBottom>
                  {exp.company}
                </Typography>
                <List dense>
                  {exp.bullets.map((b, i) => (
                    <ListItem key={i} sx={{ pl: 0 }}>
                      <ListItemText primary={b} primaryTypographyProps={{ color: '#ccc' }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 