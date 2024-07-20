import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import about2 from '../assets/profile/about2.png';


export default function About(){
    return(
        <div>
          <h1 className='aboutheader'>ABOUT</h1>
        < div className='about'>
        <Card sx={{ maxWidth: 750 , margin: "30px, 0px, 30px, 0px" }} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={about2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b><h3>About me</h3></b> 
          </Typography>
          <Typography variant="body2" color="text.secondary"><h2>
          Hey, I'm Sophia christina gifta, an aspiring web developer with a passion for creating dynamic and interactive web application. constantly, seeking opportunities
          to learn new technologies and improve my developement work flow. I'm eager to start planning an innovative app of my own."
          I'm proficient in JavaScript, React, Node.js, and MongoDB.
          </h2></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </div>
    )
}

