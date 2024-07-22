import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

   export const Contact = ()=>{

        const [name, setName] = useState('');
        const [email,setEmail] = useState('');
        const [message,setMessage] = useState('');
        const [validated,setValidated] = useState(false);

        const handleSubmit = (e) =>{
            e.preventDefault();

            if(name===""){
                setValidated("Name is required");
                return;
            }else if(email===""){
                setValidated("Email is required and valid");
                return;
            }else if(message===""){
                setValidated("Type Message");
                return;
            }else{
                setValidated("")
            }

            const form = e.currentTarget;
     if (form.checkValidity() === false) {
       e.preventDefault();
       e.stopPropagation();
     }
 
     setValidated(true);

            const YOUR_SERVICE_ID = 'service_0fnz9yn';
            const YOUR_TEMPLATE_ID = 'template_b4fmsjx';
            const YOUR_PUBLIC_KEY = 'TMNtFZ0OMD-P10Fzp';


            var templateParams = {
                from_name: name,
                from_email: email,
                message: message,
              };
        

        emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, {
              publicKey: YOUR_PUBLIC_KEY,
           }
        )
        .then((response)=>{
           
            console.log('Your Message Sent Successfully 🙌🏽🎉✨ ',response);
            setName('')
            setEmail('')
            setMessage('')
            }
        ).catch((error)=>{
            console.log(error);
            alert('Some Error Occured 😓')
        })

    }
        return(
            <div className="contact" >
               <h1>CONTACT</h1>

             

                <Paper className='papercontact' elevation={16} >
                     
                     <Box >
                   
                        <div >
                           
                        
                       
                        <FormControl className='form'  onSubmit={handleSubmit}>
                        <h6 className="svalid">{validated}</h6>

                        <div>
                        <TextField className='name' id="outlined-basic" label="Name" variant="outlined" 
                           value={name}
                           onChange={(e)=>{setName(e.target.value)}}
                        
                        />
                        </div>

                        <div className='emaildiv'>
                        <TextField className='email' id="outlined-basic" label="Email" variant="outlined" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        
                        />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                        
                        </div>
  
                        <Textarea className='message' placeholder="Message:  Type anything…" 
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            
                            />
                           <Button className='contactbtn' type='submit' variant="contained">Submit</Button>
                        </FormControl>

                     

                   </div>
                   </Box>


                </Paper>
                  
                 
             


            </div>
        )
    }

   