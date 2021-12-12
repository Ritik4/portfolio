import React from 'react'
import Ritik from '../Images/ritik.png';
import react from "../Images/React.png";
import Js from "../Images/Js.png";
import Html from "../Images/Html.png";
import Nodejs from "../Images/Nodejs.png";
import express from "../Images/express.png";
import mongodb from "../Images/MongoDb.png";
import Css from "../Images/Css.png";
import chrom from "../Images/chrome.png";
import github from "../Images/github.png";
import npm from "../Images/npm.png";
import postman from "../Images/postman.png";
import vscode from "../Images/vscode.png";

import './about.css';
function About() {
    return (
        <section className="about_master_section">
            <div className="about_section ">
                <h1 className="about_heading container  ">about.</h1>
                <div className="about_myself_wrapper">
                    <div className="about_myself container">
                        <div className="about_pic_container flex">
                                <img className="about_pic" src={Ritik} alt="" />
                        </div>
                        <div className="my_info">
                            <p>I am a web developer living in India, I love to turn imaginations into reality by using my skills with the best tools out there, I like to work with some amazing people’s who are so passionate about build something for help others to achive what they want by making their life easier.  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expertise_section ">
                <h2 className="flex"><i class="fas fa-laptop-code fa-2x"></i> <span>languages i speak</span></h2>
                <div className="languages flex">

                    <div className="expertise_flex_item ">
                        <div className="lang_card" >    
                            <span className="lang_name" >html</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={Html} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name" >css</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={Css} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name" >Js</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={Js} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name" >React</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={react} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name" >Nodejs</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={Nodejs} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name" >Express</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={express} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item ">
                        <div className="lang_card">
                            <span className="lang_name">mongodb</span>
                            <div className="lang_img_wrapper">
                                <img className="lang_img" src={mongodb} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                
               
                <h2 className="flex"><i className="fas fa-tools fa-2x"></i><span>tools i used</span></h2>                 
                <div className="tools flex">
                
                    <div className="expertise_flex_item flex">
                            <div className="lang_card">
                                <span className="tool_name" >postman</span>
                                <div className="tool_img_wrapper">
                                    <img className="tool_img" src={postman} alt="" />
                                </div>
                            </div>
                    </div>

                    <div className="expertise_flex_item flex">
                            <div className="lang_card">
                                <span className="tool_name" >github</span>
                                <div className="tool_img_wrapper">
                                    <img className="tool_img" src={github} alt="" />
                                </div>
                            </div>
                    </div>

                    <div className="expertise_flex_item flex">
                        <div className="tool_card">
                            <span className="tool_name" >VsCode</span>
                            <div className="tool_img_wrapper">
                                <img className="tool_img" src={vscode} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="expertise_flex_item flex">
                        <div className="tool_card"> 
                            <span className="tool_name" >npm</span>
                            <div className="tool_img_wrapper">
                                <img className="tool_img" src={npm} alt="" />
                            </div>
                        </div>
                    </div> 

                    <div className="expertise_flex_item flex">
                        <div className="tool_card">
                            <span className="tool_name" >Chrome</span>
                            <div className="tool_img_wrapper">
                                <img className="tool_img" src={chrom} alt="" />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default About;