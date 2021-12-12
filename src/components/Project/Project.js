import React, {useEffect, useState} from 'react'
import project from '../Images/project.jpg'
import { Link } from 'react-router-dom'
import './project.css' 


const onLeftClick = (width,leftClicks,rightClicks,setLeftClick,setRightClick)=>{
    const scrolledContent = -width*(leftClicks+1);
    document.getElementById('project_info_slider_container').scrollTo({left:scrolledContent,behavior:'smooth'});
    setLeftClick(leftClicks+1)
    setRightClick(rightClicks-1)   
}

const onRightClick = (width,leftClicks,rightClicks,setRightClick,setLeftClick)=>{
    const scrolledContent = width*(rightClicks+1);
    document.getElementById('project_info_slider_container').scrollTo({left:scrolledContent,behavior:'smooth'});
    setRightClick(rightClicks+1)
    setLeftClick(leftClicks-1)
}

function Project() {

    const [rightClicks,setRightClicks] =  useState(0);
    const [leftClicks,setLeftClicks] =  useState(0);
    const [width,setWidth] = useState(0);


   useEffect(()=>{

        const left = document.getElementById('left');
        const right = document.getElementById('right');

        if(leftClicks=== 0)
          left.classList.add('left_gone');     
        else
          left.classList.remove('left_gone')
        if(rightClicks=== 1)
          right.classList.add('right_gone');     
        else
          right.classList.remove('right_gone')


     setWidth(document.getElementById("project_info_slider_container").clientWidth); 
     
     const listner = ()=>{
        const sliderContainer = document.getElementById("project_info_slider_container");
         setWidth(sliderContainer.clientWidth);
        sliderContainer.scrollTo({left:(width*(-leftClicks)),behavior:'auto'});
     }

     window.addEventListener('resize',listner);

     return () => {
        window.removeEventListener('resize', listner);
    }

   },[width,leftClicks,rightClicks])


    return (
        <div className="project_wrapper flex">
            <section className="project_section">
                <h1>Projects.</h1>  
                <div id='project_info_slider_container'>
                    <div className="project_info_slider flex">
                        <div className="project_info_item flex container">
                            <div className="project_img_wrapper">
                                <img className="project_img" src={project} alt="" />    
                            </div>
                            <div className="project_details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, et obcaecati, velit esse ipsa odit libero harum cumque ullam fugit culpa optio .maiores, totam porro impedit beatae minus? Possimus, laudantium!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi illo repudiandae nobis vitae? Hic harum perferendis asperiores inventore quo officia ipsa! Assumenda reprehenderit odit libero laboriosam laborum numquam delectus!
                                </p>
                            </div>
                        </div>
                        <div className="project_info_item flex container">
                            <div className="project_img_wrapper">
                                <img className="project_img" src={project} alt="" />    
                            </div>
                            <div className="project_details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, et obcaecati, velit esse ipsa odit libero harum cumque ullam fugit culpa optio .maiores, totam porro impedit beatae minus? Possimus, laudantium!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi illo repudiandae nobis vitae? Hic harum perferendis asperiores inventore quo officia ipsa! Assumenda reprehenderit odit libero laboriosam laborum numquam delectus!
                                </p>
                            </div>
                        </div>
                    </div>     
                    <div id="left" onClick={()=>onLeftClick(width,leftClicks,rightClicks,setLeftClicks,setRightClicks)}>&lt;</div>
                    <div id="right" onClick={()=>onRightClick(width,leftClicks,rightClicks,setRightClicks,setLeftClicks)}>&gt;</div>
                </div>
        
                 <div className='btn_wrapper'>
                    <p className="btn_title">see that project on deffrent screen size devices</p>
                    <Link to="/responsiveness" className="btn" href="">click...</Link> 
                 </div>
            </section>
        </div>
    )
}

export default Project;