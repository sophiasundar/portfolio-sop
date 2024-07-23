import React from 'react';
import html5 from '../assets/TandS/html5.png';
import css3 from '../assets/TandS/css3.png';
import js from '../assets/TandS/js.png';
import react from '../assets/TandS/react.png';
import bootstrap from '../assets/TandS/bootstrap.png';
import reactbootstrap from '../assets/TandS/reactbootstrap.jpg';
import materialUi from '../assets/TandS/materialUi.png';
import mongodb from '../assets/TandS/mongodb.png';
import mysql from '../assets/TandS/mysql.png';

import nodejs from '../assets/TandS/nodejs.png';
import git from '../assets/TandS/git.png';
import github from '../assets/TandS/github.png';
import vscode from '../assets/TandS/vscode.jpg';
import vercel from '../assets/TandS/vercel.png';
import postman from '../assets/TandS/postman.png';
import netlify from '../assets/TandS/netlify.png';
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
            <div className='skills-tools ' id='skills-tools' >
      <h1>SKILLS-TOOLS</h1>
      <div style={{width:"100vw",justifyContent:"center",alignItems:'center', display:"flex"}} >
        <div className='containerskill' style={{width:"90%"}}>
       
           <h4 className='skillset'>Skillset :</h4>
           <div className='skillsetcontainer'>
            {skills.map((e=>{
             return <Cardss details={e} key={e.name} />
            }))}
           </div>
        
        
           <h4 className='tools'>Tools I used :</h4>
           <div className='toolscontainer'>
            {tools.map((e=>{
             return <Cardss details={e} key={e.name} />
            }))}
           </div>
       
        </div>
      </div>
      <br/>
    </div>
        </>
    )
}
export default SkillsTools
