import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './cards.css';

function Cardss(props){
    return(
        < div className='vsk'>
            <Card sx={{ display: 'flex' , width:'250px' }} className="mb-4 cardStyle" >
      <CardMedia
        component="img"
        sx={{ width: 80 ,height:80 }}
        image={props.details.image}
        className="p-3"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex' }}>          
        <CardContent sx={{ flex: '1 0 auto', }}>
          <Typography component="div" variant="h5">
            {props.details.name}
          </Typography>
          
          
        </CardContent>    
      </Box>
    </Card>

        </div>
    )
} 

export default Cardss