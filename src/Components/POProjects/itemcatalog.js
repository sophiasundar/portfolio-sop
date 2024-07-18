import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import catalog from '../assets/projects/catalog.png'
import { Button, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import Paper from '@mui/material/Paper';


   function ItemCat (){
     return(
        <div>
           <h1 className='project'>Project</h1>
        <div className="highlights">
          <div >

          <Paper className="ppaper" elevation={3} style={{ marginTop:'100px'}}>
          <b><p className='itemcat'>Item Catalog </p></b>
          <div  className='projectsection'>
              <div className="col1" >
                  
                  <div className="col-md-5 col-md-offset-1">
                  <div  className="cm" style={{maxWidth:"480px", maxHeight:"480px", marginTop:'5px', marginLeft:'40px', marginBottom:'20px'}}>
                          
                          <CardMedia
                              component="img"
                              height="350"
                              image={catalog}
                              alt="green iguana"
                            />
                      </div>
                      
                  </div>
                 

                  </div>
                  
                  <div className='col2' >
                  <div className='description'>
                              <h6>Description </h6>

                           </div>


                      <Stack direction="row-reverse" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/sophiasundar/capstone" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small"  variant='outlined' href="https://frontendcapstone-7ipu.vercel.app/" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                     
                  </div>
                  
                  </div>
              </Paper>
                  
                 
          </div>
      </div>
    </div>
     )
   }

export default ItemCat