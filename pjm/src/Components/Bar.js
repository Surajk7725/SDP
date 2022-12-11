import React from 'react'
import arisu from './Images/arisu.jpg'
import pika from './Images/pika.png';
import scrum from './Images/scrum.png';
import kanban from './Images/kanban.png';
import scrumban from './Images/scrumban.png';
import adaptive from './Images/adaptive.jpg';
import Lean from './Images/Lean.jpg';
import critical from './Images/critical.jpg';
import extreme from './Images/extreme.jpg';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
function Mobile() {
    const mble=[{ 
        "img":<img src={arisu} width="200" height="200"/>, 
        "name":"Waterfall Project Management", 
        "available":true,
        "button": <Button variant="conatined">View</Button>
    }, 
    { 
        "img":<img src={pika} width="180" height="205"/>, 
        "name":"Agile Methodology", 
        "available":true,
        "button": <Button variant="conatined">View</Button>
    },
    { 
      "img":<img src={scrum} width="200" height="200"/>, 
      "name":"Scrum Methodology", 
      "available":true,
      "button": <Button variant="conatined">View</Button>
  }, 
  { 
    "img":<img src={kanban} width="200" height="200"/>, 
    "name":"Kanban Methodology", 
    "available":true,
    "button": <Button variant="conatined">View</Button>
}, 
{ 
  "img":<img src={scrumban} width="200" height="200"/>, 
  "name":"Scrumban methodology", 
  "available":true,
  "button": <Button variant="conatined">View</Button>
}, 
{ 
  "img":<img src={adaptive} width="200" height="200"/>, 
  "name":"Adaptive project framework (APF) Methodology", 
  "available":true,
  "button": <Button variant="conatined">View</Button>
}, 
{ 
  "img":<img src={Lean} width="200" height="200"/>, 
  "name":"Lean Methodology", 
  "available":true,
  "button": <Button variant="conatined">View</Button>
}, 
{ 
  "img":<img src={critical} width="200" height="200"/>, 
  "name":"Critical path method", 
  "available":true,
  "button": <Button variant="conatined">View</Button>
}, 
{ 
        "img":<img src={extreme} width="160" height="210"/>,  
        "name":"Extreme Programming (XP) methodology", 
        "available":true,
        "button": <Button variant="conatined">View</Button>
}]
    
    
  return (
    <div>
        <h2>Project Methodologies</h2>
        <Grid 
                container 
                spacing={-7} 
                gap={10}
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
        {mble.map((mb) => (<Grid sx={{ maxWidth: 300, minHeight: 300, margin: 5, border: '5px outset black', borderRadius: 5, backgroundColor: "white", }} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/> Model Name:{mb.name}<br/> 
        Available: {mb.available 
     ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
    </Grid>
    </div>
  )
}

export default Mobile