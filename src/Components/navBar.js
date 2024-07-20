import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import WavingHandIcon from '@mui/icons-material/WavingHand';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';




function PortNavBar (){

     

    return(
        <>
           
           <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <WavingHandIcon sx={{ display: { xs: 'none', md: 'flex', color:'black' }, mr: 1 }} />
                
                <Tooltip title='Back to HomePage'>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                    }}
                >
                    Home
                </Typography>
                </Tooltip>

                

                
               
                <Box  className='boxnav' sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                    
                    <Button variant='h6' sx={{ my: 3, color: 'black', display: 'block', fontFamily: 'monospace', fontWeight: 800,
                     }}  >
                         About
                    </Button>
                    
                    <Button variant='h6' sx={{ my: 3, color: 'black', display: 'block',  fontFamily: 'monospace', fontWeight: 800,
                    }}   >
                        Skills & Tools
                    </Button>

                    <Button variant='h6' sx={{ my: 3, color: 'black', display: 'block',  fontFamily: 'monospace', fontWeight: 800,
                     }}     >
                        Projects
                    </Button>

                    <Button variant='h6' sx={{ my: 3, color: 'black', display: 'block', fontFamily: 'monospace', fontWeight: 800,}}
                             >
                       Contact
                    </Button>

                </Box>



                

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="" src="" />
                    </IconButton>
                    </Tooltip>
                    
          </Box>

        </Toolbar>
      </Container>
    </AppBar>

        </>
    )
}

export default PortNavBar