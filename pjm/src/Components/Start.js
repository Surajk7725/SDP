import React from 'react'
import vi from './Images/vi.mp4'
import Button from '@mui/material/Button';
import NavBar from './NavBar';

const hero = () => {
    return (
        <div className='hero'>
            <NavBar></NavBar>
            <video autoPlay loop muted id='video'>
                <source src={vi} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Project Management System</h1>
                <h1><span>Manage your </span> Business Projects</h1>
                <p>Guaranteed satisfaction with our service.</p>
                <div className="btn-group">
                    <Button href ="/SignUp"variant="contained">Get Started</Button>
                </div>
            </div>
           
        </div>
    )
}

export default hero