import React, { Component } from 'react'

export class Projects extends Component {
  render() {
    return (
        <div className="condiv">
            <div className="subtopic">
                <h1 className="subtopic">Projects</h1>
                <div class="ui cards">
                    <div class="card">
                        <div class="content">
                            <div class="header">Chatbot Thozhan</div>
                            <div class="description">
                            Chatbot is created to handle employee and customer inquiries without the need for human intervention. 
                            Tensorflow's Keras sequential model is used to create the chatbot with Python (FastAPI) serving as the backend and React serving as the front end.
                            </div>
                            <div class="ui clearing divider"></div>
                            <button class="ui button">ReactJS</button>
                            <button class="ui button">Python</button>
                            <button class="ui button">Tensorflow</button>
                            <button class="ui button">FastAPI</button>
                        </div>
                    </div>
                    <div class="card">
                    <div class="content">
                        <div class="header">Image Searcher</div>
                        <div class="description">
                        Imager searcher is an image search application that uses an open source API called Unsplash API to search for images. 
                        In this application, I have used React as a frontend and CSS grid to display the images with styling.
                        </div>
                        <div class="ui clearing divider"></div>
                        <button class="ui button">ReactJS</button>
                        <button class="ui button">Python</button>
                        <button class="ui button">Tensorflow</button>
                    </div>
                    </div>
                    <div class="card">
                    <div class="content">
                        <div class="header">Chatbot Thozhan</div>
                        <div class="description">
                            Chatbot Created Using React and python.
                        </div>
                        <button class="ui button">Button</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Projects
