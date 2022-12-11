import React from 'react'
import SDP from '../Components/Images/SDP.mp4'
import Button from '@mui/material/Button';


function MiniApp() {
  return (
    <div>
      <h1>Introduction to Project Management System</h1>
     <center>
      <div id='outer'>
     <video src={SDP} width={750} height={650} autoPlay loop muted/>
     </div>
     </center>
     <Button variant="contained" href="/Draw">Start My Journey</Button>
   
    
   
    </div>
  );
}

export default MiniApp