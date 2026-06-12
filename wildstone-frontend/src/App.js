import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Landing';
import ClientPortal from './ClientPortal';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  return (
    <>
      <Navbar showClientPortalButton={isLanding} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portal" element={<ClientPortal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
