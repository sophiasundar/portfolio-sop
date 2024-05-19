import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import about2 from '../assets/profile/about2.png';
import './about.css';

export default function About(){
    return(
        < div className='about'>
        <Card sx={{ maxWidth: 750 , margin: "30px, 0px, 30px, 0px" }} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={about2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b>About me</b> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Hey, I'm Sophia christina gifta, an aspiring web developer with a passion for creating dynamic and interactive web application. constantly, seeking opportunities
          to learn new technologies and improve my developement work flow.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}

