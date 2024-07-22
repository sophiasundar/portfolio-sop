import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import about2 from '../assets/profile/about2.png';
import about  from '../assets/about/girl coder.gif';

export default function About(){
    return(
        <div>
          <h1 className='aboutheader'>ABOUT</h1>
        < div className='about'>
        <Card sx={{ maxWidth: 750 , margin: "10px, 0px, 10px, 0px" }} elevation={6}>
      <CardActionArea>
        <div className='cardmedia'>
        <CardMedia
          component="img"
          height="450"
          image={about}
          alt="green iguana"
        />
        </div>
        <div className='cardcontent'>
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
        </div>
      </CardActionArea>
      
    </Card>
        </div>
        </div>
    )
}

