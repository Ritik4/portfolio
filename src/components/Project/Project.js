import React from 'react'
import project from '../Images/project.jpg'
import { Link } from 'react-router-dom'
import './project.css'

function Project() {
    return (
        <div className="project_wrapper flex">
            <section className="project_section container">
                <h2>Projects.</h2>       
                <div className="project_info flex">
                    <div className="project_img_wrapper">
                        <img className="project_img" src={project} alt="" />    
                    </div>
                    <div className="project_details">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, et obcaecati, velit esse ipsa odit libero harum cumque ullam fugit culpa optio .maiores, totam porro impedit beatae minus? Possimus, laudantium!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi illo repudiandae nobis vitae? Hic harum perferendis asperiores inventore quo officia ipsa! Assumenda reprehenderit odit libero laboriosam laborum numquam delectus!
                        </p>
                    </div>
                </div>
                <p className="btn_title">see that project on deffrent screen size devices</p>
                <Link to="/responsiveness" className="btn" href="">click...</Link> 
            </section>
        </div>
    )
}

export default Project;