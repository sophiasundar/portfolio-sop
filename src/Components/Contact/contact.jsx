import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {toast} from 'react-toastify';



   export const Contact = ()=>{

        const form = useRef();

        const handleSubmit = (e) =>{
            e.preventDefault();

           
        

        emailjs
        .send(

            'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
              publicKey: 'YOUR_PUBLIC_KEY',
           }
        )
        .then((result)=>{
            if(result.text === 'ok'){
                toast.success('Your Message Sent Successfully 🙌🏽🎉✨ ',{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    backgroundColor: '#001F3F', 
                    color: '#fff'
                });
            }
        }).catch((error)=>{
            console.log(error);
            toast.error('Some Error Occured 😓', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                backgroundColor: '#001F3F', 
                    color: '#fff'
            })
        })

    }
        return(
            <div className="contact" >
               <h1>CONTACT</h1>

             

                <Paper className='papercontact' elevation={16} >
                     
                     <Box >
                   
                        <div >
                           
                           

                        <form ref={form} onSubmit={handleSubmit}>
                           <label>Name</label>
                            <input type="text" name="from_name" />
                            <label>Email</label>
                            <input type="email" name="email_id" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>

                     

                   </div>
                   </Box>

                   {/* start */}

                   

                           {/* end */}

                </Paper>
                  
                 
             


            </div>
        )
    }

   