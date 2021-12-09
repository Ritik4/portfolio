import React from 'react'
import profile from '../Images/profile.png'
import {Link} from "react-router-dom";
import './hero.css'

function Hero() {
    return (
        <div className="hero_wrapper">
            <section className="hero container flex">
                <div className="greeting">
                    <h1>&lt;coder&gt;</h1>
                    <p>Hi, i’m Ritik, <br/>
                        A creative, <br/>
                        web developer
                    </p>
                    <Link className="btn" to="#">My Projects</Link>
                </div> 
 
                <div className="profile_pic">
                    <img src={profile} alt="profile pic" />
                </div>
            </section>
        </div>
    )
}

export default Hero;