import React from 'react';
import Paper from '@mui/material/Paper';
import './Skills.css';
import html5 from '../assets/skills/html5-logo.png';
import css3 from '../assets/Skills/css3.png';
import js from '../assets/Skills/js.png';
import react from '../assets/Skills/react.png';
import bootstrap from '../assets/Skills/bootstrap.png';
import reactbootstrap from '../assets/Skills/reactbootstrap.png';
import materialUi from '../assets/Skills/materialUi.png';
import mongodb from '../assets/Skills/mongodb.png';
import mysql from '../assets/Skills/mysql.png';
import nodejs from '../assets/Skills/nodejs.png';
import git from '../assets/Skills/git.png';
import github from '../assets/Skills/github.png';
import vscode from '../assets/tools/vscode.png';
import vercel from '../assets/tools/vercel.png';
import postman from '../assets/tools/postman.png';
import netlify from '../assets/tools/netlify.png';
import Cardss from './cards';


const SkillsTools=()=>{

    const skills =[
        {
          image: html5,
          name:"HTML5"
        },
        {
          image: css3,
          name:"CSS3"
        },
        {
          image: js,
          name:"Javascript"
        },
        {
          image: bootstrap,
          name:"Bootstrap"
        },
        {
          image: react,
          name:"React"
         },
        {
          image: nodejs,
          name:"Nodejs"
        },
        {
          image: mongodb,
          name:"MongoDB"
        },
        {
          image: mysql,
          name:"Mysql"
        },
        {
          image: git,
          name:"Git"
        },
        {
          image: github,
          name:"Git Hub"
        },
        {
          image: materialUi,
          name:"Material UI"
        },
        {
           image: reactbootstrap,
           name:"React Bootstrap"
        }
      ]
      const tools = [
        {
          image: vscode,
          name:"VS Code"
        },
        {
          image: postman,
          name:"Postman"
        },
        {
          image: netlify,
          name:"Netlify"
        },
        {
          image: vercel,
          name:"Vercel"
        },
      ]
    return(
        <>
            <div className='skill ' >
      <h1>Skills & Tools</h1>
      <div style={{width:"100vw",justifyContent:"center",alignItems:'center', display:"flex"}} >
        <div style={{width:"90%"}}>
        <Paper elevation={3} >
           <h4 className='text-align-left d-flex p-3'>Skillset :</h4>
           <div className='d-flex flex-wrap  px-5 cardAlign'>
            {skills.map((e=>{
             return <Cardss details={e} key={e.name} />
            }))}
           </div>
        </Paper>
        <br/ >
        <Paper elevation={3} >
           <h4 className='text-align-left d-flex p-3'>Tools I used :</h4>
           <div className='d-flex flex-wrap  px-5 cardAlign'>
            {tools.map((e=>{
             return <Cardss details={e} key={e.name} />
            }))}
           </div>
        </Paper>
        </div>
      </div>
      <br/>
    </div>
        </>
    )
}
export default SkillsTools
