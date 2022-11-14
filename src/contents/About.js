import React, { Component } from 'react';
import profilepic from '../img/vimal_photo.jpg';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
                <div className="condiv">
                    <h1 className="subtopic">About Me</h1>
                    <h1>I'm Vimal Raj K</h1>
                    <h3>Trainee - Software Engineer at Relevantz</h3>
                    <br></br>
                    <p>I am Vimal Raj K completed B.E (ECE) from S.A Engineering College. My primary area of interest is software development, 
                    and I am always eager to learn new technologies.
                    My main hobby is solving programming challenges on hackerrank and competing in coding. My final year project is a health kiosk (software) 
                    that measures the patient's health parameters without requiring any human interaction.<br/><br/>
                    My final year project is a health kiosk (software) that is used to measure the patient's health parameters without requiring any human interaction, 
                    and I have implemented a stroke prediction feature with the health parameters.
                    Aside from that, I've built a chatbot, an image searcher application with React, and machine learning models with Scikit- learn.
                    </p>

                    </div>
            </div>
            )
        }
    }
    
    export default Home
    