import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Paper, Stack } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import about from '../assets/profile/about.png'




const Hero = () =>{

   

    return(
       <>
          <div className='hero'  style={{height:"100vh"}}>
             <div className='content'>
                 <div height='100vh'>

                 <h1 className="mb-3 display-3 title primary"><b>Hi,I'm Sophia Christina Gifta</b></h1>
                 <hr/>
                 <h4>Mern Stack Web Developer</h4>
                 <div className='d-flex flex-row justify-content-center'>
                 <Stack direction='row' spacing={3} >
                      
                       <IconButton color="primary"  component="label">
                          <a href='https://github.com/sophiasundar' rel="noreferrer" target="_blank">
                           <GitHubIcon/>  
                        </a> <span className="resume-text">GitHub</span>
                        </IconButton>
                        
                        <IconButton color="primary"  component="label" >
                        <a href='mailto: sophiagifta17@gmail.com' rel="noreferrer" target="_blank">
                        <MailOutlineIcon />
                        </a><span className="resume-text">Email</span>
                        </IconButton>

                        <IconButton color="primary"  component="label"  >
                           
                        <a href='https://www.linkedin.com/in/sophia-gifta17/' rel="noreferrer" target="_blank">
                         <LinkedInIcon/>
                        </a> <span className="resume-text">LinkedIn</span>
                        </IconButton>

                        <IconButton color="primary"  component="label" >
                        <a href='https://drive.google.com/file/d/1-1OS6SoCp7AlKAMlciF-lQZjicmdvjSa/view?usp=sharing' rel="noreferrer" target="_blank">
                         <ArticleIcon/>
                        </a> 
                        <span className="resume-text">Resume</span>
                        </IconButton>
                    </Stack>

                 </div>
                 </div>
                 <div className='paper'>
                 <Paper className='d-flex flex-column justify-content-end m-4' elevation={16} style={{borderRadius:"50px" , border:"2px solid black",backgroundColor:"transparent"}}>
                 <img src={about} alt='about' className="image"/>
                 </Paper>
                 </div>
                    
             </div>



          </div>

       </>
   
    )

}

export default Hero