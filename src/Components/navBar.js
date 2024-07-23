import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
// import { makeStyles } from '@material-ui/core/styles';
import WavingHandIcon from '@mui/icons-material/WavingHand';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';



function PortNavBar (){
      
    // const useStyles = makeStyles((theme)=>{
        
    // })
   
    

    return(
        <>
           
           <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center', }} >
            <Container maxWidth="sm" >
            
                <Toolbar disableGutters>
                <Tooltip title='Welcome'>
                  <WavingHandIcon sx={{ display: { xs: 'none', md: 'flex', color:'black' }, mr: 1 }} />
                
                
               
                </Tooltip>

                

                <Stack direction="row" spacing={0}  className='boxnav' sx={{ flexGrow: 1, display: { xs: '6', md: '1' } }}>
               
               
                    
                    
               
                 <Button variant='h6' sx={{ my: 3, display: 'block',  fontFamily: 'monospace', fontWeight: 800,
                    }}   >
                        <NavLink style={{ color: 'black' }} className='navlink' to="/" activeClassName="active" exact>Home</NavLink>
                    </Button>

                    <Button variant='h6' sx={{ my: 3, display: 'block',  fontFamily: 'monospace', fontWeight: 800,
                     }}     >
                        <NavLink style={{ color: 'black' }} to="/about" activeClassName="active">About</NavLink>
                    </Button>

                    <Button variant='h6' sx={{ my: 3, display: 'block', fontFamily: 'monospace', fontWeight: 800,}}
                             >
                      <NavLink style={{ color: 'black' }} to="/skills-tools" activeClassName="active">Skills&tools</NavLink>
                    </Button>

                    <Button variant='h6' sx={{ my: 3, display: 'block', fontFamily: 'monospace', fontWeight: 800,}}
                             >
                      <NavLink style={{ color: 'black' }} to="/projects" activeClassName="active">Projects</NavLink>
                    </Button>

                    <Button variant='h6' sx={{ my: 3, display: 'block', fontFamily: 'monospace', fontWeight: 800,}}
                             >
                      <NavLink style={{ color: 'black' }} to="/contact" activeClassName="active">Contact</NavLink>
                    </Button>

                    


               


                </Stack>
                

                

        </Toolbar>
      </Container>
    </AppBar>
  
        </>
    )
}

export default PortNavBar