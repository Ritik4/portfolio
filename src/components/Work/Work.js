import React from 'react'
import { Link } from 'react-router-dom';
import project from '../Images/project.jpg';
import "./work.css"

function Work() {
    return (
        <div>
            <section className="work-section container">

                <header className="work-header">
                    <h2>My Recent Works</h2>
                    <h3>Here are some sample of my projects I’ve worked on recently</h3>
                </header>

                <div   className="projects flex ">
                    <div className="project-item ">
                       <div className="project-img-container">
                           <img className="project-img" src={project} alt=""/>
                        </div>
                        <span>Project tile</span>
                        <div className="details-btn">
                           <Link to="/work">Details</Link>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-img-container">
                           <img className="project-img" src={project} alt=""/>
                        </div>
                        <span>Project tile</span>
                        <div className="details-btn">
                          <Link to="/work">Details</Link>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default Work;