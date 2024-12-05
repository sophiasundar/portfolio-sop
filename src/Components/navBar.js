
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function PortNavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent with a white background
        boxShadow: 3, // Subtle shadow
        backdropFilter: 'blur(10px)', // Blur effect
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // Soft border
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ padding: 0 }}>
          {/* Left side: Waving Hand Icon */}
          <Tooltip title="Welcome">
            <WavingHandIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: theme.palette.text.primary,
                mr: 2,
                fontSize: 30,
                 className: 'waving-hand'
              }}
            />
          </Tooltip>

          {/* Navigation links */}
          <Stack
            direction="row"
            spacing={isMobile ? 2 : 4}
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              gap: 2,
            }}
          >
            {/* Home Link */}
            <NavLink
              to="/"
              exact
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'transform 0.3s ease, color 0.3s ease', // Add transition for transform and color
              }}
              activeStyle={{
                color: theme.palette.primary.main,
                borderBottom: '2px solid ' + theme.palette.primary.main,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)'; // Slightly enlarge the button on hover
                e.target.style.color = theme.palette.primary.main; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset size when mouse leaves
                e.target.style.color = theme.palette.text.primary; // Reset color
              }}
            >
              Home
            </NavLink>

            {/* About Link */}
            <NavLink
              to="/about"
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'transform 0.3s ease, color 0.3s ease', // Add transition for transform and color
              }}
              activeStyle={{
                color: theme.palette.primary.main,
                borderBottom: '2px solid ' + theme.palette.primary.main,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)'; // Slightly enlarge the button on hover
                e.target.style.color = theme.palette.primary.main; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset size when mouse leaves
                e.target.style.color = theme.palette.text.primary; // Reset color
              }}
            >
              About
            </NavLink>

            {/* Skills & Tools Link */}
            <NavLink
              to="/skills-tools"
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'transform 0.3s ease, color 0.3s ease', // Add transition for transform and color
              }}
              activeStyle={{
                color: theme.palette.primary.main,
                borderBottom: '2px solid ' + theme.palette.primary.main,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)'; // Slightly enlarge the button on hover
                e.target.style.color = theme.palette.primary.main; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset size when mouse leaves
                e.target.style.color = theme.palette.text.primary; // Reset color
              }}
            >
              Skills & Tools
            </NavLink>

            {/* Projects Link */}
            <NavLink
              to="/projects"
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'transform 0.3s ease, color 0.3s ease', // Add transition for transform and color
              }}
              activeStyle={{
                color: theme.palette.primary.main,
                borderBottom: '2px solid ' + theme.palette.primary.main,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)'; // Slightly enlarge the button on hover
                e.target.style.color = theme.palette.primary.main; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset size when mouse leaves
                e.target.style.color = theme.palette.text.primary; // Reset color
              }}
            >
              Projects
            </NavLink>

            {/* Contact Link */}
            <NavLink
              to="/contact"
              activeClassName="active"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'transform 0.3s ease, color 0.3s ease', // Add transition for transform and color
              }}
              activeStyle={{
                color: theme.palette.primary.main,
                borderBottom: '2px solid ' + theme.palette.primary.main,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)'; // Slightly enlarge the button on hover
                e.target.style.color = theme.palette.primary.main; // Change color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset size when mouse leaves
                e.target.style.color = theme.palette.text.primary; // Reset color
              }}
            >
              Contact
            </NavLink>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default PortNavBar;
