import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import WavingHandIcon from '@mui/icons-material/WavingHand';




function PortNavBar (){
      
    
   
    

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

                

                <Stack direction="row" spacing={8}  className='boxnav' sx={{ flexGrow: 1, display: { xs: '6', md: '1' } }}>
               
               
                    
                    
               
                
                        <NavLink variant='h6' style={{ my: 3, display: 'block', fontWeight: 'bold', color: 'black' }} className='navlink' to="/" activeClassName="active" exact>Home</NavLink>
                   

                   
                        <NavLink variant='h6'style={{ my: 3, display: 'block', fontWeight: 'bold', color: 'black' }} to="/about" activeClassName="active">About</NavLink>
                    

                    
                      <NavLink variant='h6' style={{ my: 3, display: 'block', fontWeight: 'bold', color: 'black' }} to="/skills-tools" activeClassName="active">Skills&tools</NavLink>
                    

                    
                      <NavLink variant='h6' style={{ my: 3, display: 'block', fontWeight: 'bold', color: 'black' }} to="/projects" activeClassName="active">Projects</NavLink>
                   

                    
                      <NavLink variant='h6' style={{ my: 3, display: 'block', fontWeight: 'bold', color: 'black' }} to="/contact" activeClassName="active">Contact</NavLink>
                    

                    


               


                </Stack>
                

                

        </Toolbar>
      </Container>
    </AppBar>
  
        </>
    )
}

export default PortNavBar