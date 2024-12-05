import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import catalog from '../assets/projects/catalog.png';
import { Button, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




   function ItemCat (){
     return(
        <div>
           <h1 className='project'>PROJECTS</h1>
        <div className="highlights">
          <div >

          <Paper className="ppaper" elevation={3} style={{ maxWidth: 750, marginTop:'100px'}}>
          <b><h3 className='itemcat'>ITEM CATALOG </h3></b>
          <div  className='projectsection'>
              <div className="col1" >
                  
                  <div className="col-md-5 col-md-offset-1">
                  <div  className="card" >
                          
                          <CardMedia
                              className='cardimg'
                              component="img"
                              sx={{ height: 225 }}
                              image={catalog}
                              alt="catalog project img"
                            />
                      </div>
                      
                  </div>
                 

                  </div>
                  
                  <div className='col2' >
                  <div className='description'>
                            <div className='dis'>
                            <Card  className='card1' sx={{ minWidth: 175 }}>
                                  <CardContent>
                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    <h4>Description: </h4>
                                    </Typography>
                                    
                                    <Typography variant="body2">
                                    <p>Item catalog is to show case the items or products to users.
                                      <br></br>
                                        It serves as a digital representation of items allowing users to browse,
                                          <br></br>
                                         search and 
                                        view information about each item.
                                           </p>
                                    </Typography>
                                  </CardContent>
                                 
                                </Card>
                                           </div>
                                           <div className='feature'>
                                           <Card className='card2' sx={{ minWidth: 175, height: 232 }}>
                                  <CardContent>
                                    <Typography sx={{ fontSize: 14 }}  gutterBottom>
                                    <h4>Features: </h4>
                                    </Typography>
                                    
                                    <Typography variant="body2">
                                    <ul>

                                    <li>Can view, edit, delete cards</li>
                                    <li>Show case the several categories of items in different Tabs</li>
                                    <li>Efficient data management.</li>
                                    <li>Good Authentication for user.</li>
                                    <li>Decent design with proper responsive for all devices</li>
                                    

                                   </ul>
                                    </Typography>
                                  </CardContent>
                                 
                                </Card>
                                   </div>
                           </div>

                           <Stack direction="row" justifyContent="flex-start" spacing={2} mt={2}>
                <Button
                  size="small"
                  variant="contained"
                  href="https://github.com/sophiasundar/B47-Backend-FS/tree/main/capstoneFS"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{
                    '&:hover': { backgroundColor: '#1d1d1d' },
                    backgroundColor: '#333',
                    color: 'white',
                  }}
                >
                  Github BE
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  href="https://github.com/sophiasundar/frontendcapstone"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{
                    '&:hover': { backgroundColor: '#1d1d1d' },
                    backgroundColor: '#333',
                    color: 'white',
                  }}
                >
                  Github FE
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  href="https://frontendcapstone-7ipu.vercel.app/"
                  target="_blank"
                  startIcon={<LaunchIcon />}
                  sx={{
                    '&:hover': { backgroundColor: '#1d1d1d' },
                    backgroundColor: '#333',
                    color: 'white',
                  }}
                >
                  Site
                </Button>
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