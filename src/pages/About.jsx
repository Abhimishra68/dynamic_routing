import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
     const naviagte =  useNavigate()
    // const btnClicked = () => {
    //     console.log('button is clicked');
    //     naviagte('/');
    // }

  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button onClick={()=>{
           naviagte('/')
        }} 
        className='bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Return HomePage</button>
         <button onClick={()=>{
            naviagte(-1)
         }} 
         className='bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Back</button>

         <button onClick={()=>{
            naviagte(+1)
         }} 
         className='bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Forward</button>
        
        <h1>About Page</h1>

       
    </div>
  )
}

export default About