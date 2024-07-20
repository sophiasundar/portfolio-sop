import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormHelperText } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';


    function Contact (){
        return(
            <div className="contact" >
               <h1>CONTACT</h1>

             <div className="contactpaper" >

                <Paper className='papercontact' elevation={16} style={{ marginTop:'100px'}}>
                     
                     <Box >
                   
                        <div >
                     <FormControl >
                        <div className='form'>
                        
                         <TextField className='name' id="outlined-basic" label='Name' type='text' variant="outlined" />


                           
                        <TextField className='email' id="outlined-basic" label="Email" type='email' variant="outlined" />
                        <FormHelperText  className='text' id="my-helper-text">We'll never share your email.</FormHelperText>

                        <Textarea className='message' name="Outlined" placeholder="Message:  Type in here…" variant="outlined" />
                     
                   <Button className='buttons' type="submit">Submit</Button>
                       </div>
                   </FormControl>
                   </div>
                   </Box>

                </Paper>
                  
                 
             </div>


            </div>
        )
    }

    export default Contact