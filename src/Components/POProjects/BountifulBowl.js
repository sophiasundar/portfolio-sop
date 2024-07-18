import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BountiBowl from '../assets/projects/BountiBowl.png';
import { Button, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function BountifulBowl(){
    return(
        <>

<div>
           
        <div className="highlights">
          <div >

          <Paper className="ppaper" elevation={3} style={{ marginTop:'100px'}}>

          <b><p className='itemcat'>BountifulBowl</p></b>
          <div  className='projectsection'>
              <div className="col1" >
                  
                  <div className="col-md-5 col-md-offset-1">
                  <div  className="card" >
                          
                          <CardMedia
                              component="img"
                              sx={{ height: 260 }}
                              image={BountiBowl}
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
                                    <p> Purpose of this application is to serve for orphan people, the 
                                        surplus amount of food can be utilised by the needy. The banquet manager will create 
                                        the list of food and banquet address, avaliablity date and time of the food before get wasted.
                                         The orphanage manager whoever ready to recieve the food will send email to banquet manager.
                                           </p>
                                    </Typography>
                                  </CardContent>
                                 
                                </Card>
                                           </div>
                                           <div className='feature'>
                                           <Card className='card1' sx={{ minWidth: 175, height: 333 }}>
                                  <CardContent>
                                    <Typography sx={{ fontSize: 14 }}  gutterBottom>
                                    <h4>Features: </h4>
                                    </Typography>
                                    
                                    <Typography variant="body2">
                                    <ul>

                                    <li>Authorised view, edit, delete cards .</li>
                                    <li>Good role based Authorisation is maintained.</li>
                                    <li>Orphanage manager will send email, email feature is added.</li>
                                    <li>Efficient data management.</li>
                                    <li>Good Authentication for user.</li>
                                    <li>Seperate dashboard is maintained for the Banquet manger and orphange manager </li>
                                    <li>Effective Context API is utilized</li>
                                    <li>Decent design with proper responsive for all devices</li>
                                    

                                   </ul>
                                    </Typography>
                                  </CardContent>
                                 
                                </Card>
                                   </div>
                           </div>

                      <Stack className='buttons' direction="row-reverse" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/sophiasundar/bountifulbowl" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small"  variant='outlined' href="https://bountifulbowl.vercel.app/" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                     
                  </div>
                  
                  </div>
              </Paper>
                  
                 
          </div>
      </div>
    </div>


        </>
    )
}

export default BountifulBowl