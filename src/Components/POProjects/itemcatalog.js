import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import catalog from '../assets/projects/catalog.png';
import { Button,Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import Paper from '@mui/material/Paper';


   function ItemCat (){
     return(
        <div>
           <h1 className='project'>Project</h1>
        <div className="highlights">
          <div >

          <Paper className="paper" elevation={3} style={{ marginTop:'100px'}}>
          <b><p className='itemcat'>Item Catalog </p></b>
              <section className="container" >
                  
                  <div className="col-md-5 col-md-offset-1">
                  <div  className="cm" style={{maxWidth:"280px", marginTop:'20px'}}>
                          
                          <CardMedia
                              component="img"
                              height="450"
                              image={catalog}
                              alt="green iguana"
                            />
                      </div>
                      
                  </div>
                  <div  >
                 
                      <Stack direction="row-reverse" spacing={2}>
                        
                          <Button size="small" variant='outlined' href="https://github.com/sophiasundar/capstone" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small"  variant='outlined' href="https://frontendcapstone-7ipu.vercel.app/" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                     
                  </div>
              </section>
              </Paper>
                  <br />
                  <br />
                 
          </div>
      </div>
    </div>
     )
   }

export default ItemCat