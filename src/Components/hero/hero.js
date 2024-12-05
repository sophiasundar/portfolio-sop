import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Paper, Stack } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import about from '../assets/profile/about.png'
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


const Hero = () =>{

   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return(
       <>
          <div className='hero' id='hero'  style={{height:"100vh" }}  >
             <div className='content'>
                 <div height='100vh'>

                 <h1 className="mb-3 display-3 title primary"><b>Hi,I'm Sophia Christina Gifta</b></h1>
                 <hr/>
                 <h4>Mern Stack Web Developer</h4>
                 <div className='d-flex flex-row justify-content-center'>
                 <Stack direction='row' spacing={3} className='stackhero' >
                        <Tooltip title="Github">
                       <IconButton color="primary"  component="label">
                          <a href='https://github.com/sophiasundar' rel="noreferrer" target="_blank">
                           <GitHubIcon/>  
                        </a> 
                        </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Email">
                        <IconButton color="primary"  component="label" >
                        <a href='mailto: sophiagifta17@gmail.com' rel="noreferrer" target="_blank">
                        <MailOutlineIcon />
                        </a>
                        </IconButton>
                        </Tooltip>

                        <Tooltip title='LinkedIn'>
                        <IconButton color="primary"  component="label"  >
                           <a href='https://www.linkedin.com/in/sophia-gifta17/' rel="noreferrer" target="_blank">
                         <LinkedInIcon/>
                        </a>
                        </IconButton>
                        </Tooltip>

                        <Tooltip title='Resume'>
                        <IconButton color="primary"  component="label" >
                        <a href='https://drive.google.com/file/d/1lDx19jUES4qOeQ9An-MP877ztWhBnep_/view?usp=sharing' rel="noreferrer" target="_blank">
                         <ArticleIcon/>
                        </a> 
                       </IconButton>
                        </Tooltip>

                    </Stack>

                 </div>
                 </div>
                 <div className='paper'>
                 <Paper
          elevation={16}
          sx={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: isMobile ? '200px' : '300px', // Adjust size for mobile
            height: isMobile ? '200px' : '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            backgroundColor: 'transparent',
            border: `5px solid ${theme.palette.primary.main}`,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)', // Hover effect to enlarge image
            },
          }}
        >
          <img
            src={about}
            alt="About Sophia"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </Paper>

                 </div>
                    
             </div>



          </div>

       </>
   
    )

}

export default Hero