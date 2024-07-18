import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Cardss(props){
    return(
        < div className='vsk'>
            <Card sx={{ display: 'flex' , width:'190px' }} className="mb-2 cardStyle" >
      <CardMedia
        component="img"
        sx={{ width: 80 ,height:80 }}
        image={props.details.image}
        className="p-3"
        alt="logo of skill and tools"
      />
      <Box sx={{ display: 'flex' }}>          
        <CardContent sx={{ flex: '0' }}>
          <Typography component="div" variant="p">
           {props.details.name}
          </Typography>
          
          
        </CardContent>    
      </Box>
    </Card>

        </div>
    )
} 

export default Cardss