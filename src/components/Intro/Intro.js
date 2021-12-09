import React from 'react'
import setup from '../Images/setup.png'
import './intro.css'    
function Intro() {
    return (
        <div>
            <section className="intro-section flex ">
                <div className="image-wrapper container">
                  <img className="setup-img" src={setup} alt="" />
                </div>
                <div className="intro"> 
                  <div className="container">
                    <h2>Hi, I’m Ritik,Nice to meet you</h2>
                    <p>
                        I am a web developer living in India, I love to turn imaginations into reality by using my skills with the best tools out there, I like to work with some amazing people’s who are so passionate about build something for help others to achive what they want by making their life easier. 
                    </p>
                  </div>    
                </div>
            </section>
        </div>
    )
}   

export default Intro;