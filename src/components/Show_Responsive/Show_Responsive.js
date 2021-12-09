import React, { useState ,useEffect} from 'react'
import Macbook from '../Images/Mackbook.png';
import AppleIpad from "../Images/Component_11-removebg-preview.png";
import AppleIphonX from "../Images/Component_12-removebg-preview.png";
import AppleIphon8Plus from "../Images/Component_13-removebg-preview.png";
import SamsungGalaxyS9 from "../Images/Samsung Galaxy S9.png";
import iPhoneSE from "../Images/iPhone SE.png";
import GalaxyS7 from "../Images/Galaxy S7.png";
import AppleiPadPro13 from "../Images/Apple iPad Pro 13.png";

import Logo from "../Images/logo.png";
// import {Carousel} from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./show_responsive.css";


const deviceArr =  [AppleIpad,AppleIphonX,AppleIphon8Plus,SamsungGalaxyS9,iPhoneSE,GalaxyS7,AppleiPadPro13,Macbook];

// console.log(devices);

const onScrollHandler = (e)=>{
    // e.target.scrollTo(0,0);
    // console.log(e.target.clientWidth);
}       

// const onLeftClick = (e,initialContainerWidth,setContainerWidth)=>{
//     // console.log(container.clientWidth)
// const container = document.getElementById('slider_container');
// const count = document.getElementById('devices_slider').childElementCount;
// const currentContainerWidth = container.clientWidth;
// const updatedContainerWidth = currentContainerWidth+initialContainerWidth;
// setContainerWidth(updatedContainerWidth);
// console.log(updatedContainerWidth);
// container.scrollTo({left:updatedContainerWidth,behavior:'smooth'});
// console.log(currentContainerWidth*count);
// if(updatedContainerWidth===currentContainerWidth*count){
//     e.target.className = "left_gone";
// }
// }

const onLeftClick = (width,leftClicks,setLeftClicks,setRightClicks,rightClicks,setDevices,setanimStyle)=>{
    // console.log(leftClicks);
    // console.log(width);
    // console.log(leftClicks)
    
    const scrolledContent = -width*(leftClicks+1)   ;
    // console.log(scrolledContent);
    document.getElementById('slider_container').scrollTo({left:scrolledContent,behavior:'smooth'});
    setLeftClicks(leftClicks+1);
    setRightClicks(rightClicks-1);
    setDevices(deviceArr[-(leftClicks+1)])
    setanimStyle({animationName:'example'})

}       

const onRightClick = (width,rightClicks,setRightClicks,setLeftClicks,leftClicks,setDevices,setanimStyle)=>{
       const scrolledContent = width*(rightClicks+1);
    document.getElementById('slider_container').scrollTo({left:scrolledContent,behavior:'smooth'});
    setRightClicks(rightClicks+1);
    setLeftClicks(leftClicks-1);
    setDevices(deviceArr[rightClicks+1])
    setanimStyle({animationName:'example'})
}





function Show_Responsive() {

    // const [initialContainerWidth,setContainerWidth] = useState(0);

    const [rightClicks,setRightClicks] =  useState(0);
    const [leftClicks,setLeftClicks] =  useState(0);
    const [devices,setDevices] = useState(deviceArr[0]);
    const [width,setWidth] = useState(0);
    const [animStyle,setanimStyle] = useState({animationName:'example'});
    
    // const [device,setDevices] = useState(devices[0])

    
    
    useEffect(() => {
       
        const left = document.getElementById('left');
        const right = document.getElementById('right');

        setTimeout(()=>setanimStyle({}),1000);
        
        
        if(leftClicks=== 0)
          left.classList.add('left_gone');     
        else
          left.classList.remove('left_gone')
        if(rightClicks=== 7)
          right.classList.add('right_gone');     
        else
          right.classList.remove('right_gone')

         

        const listner = ()=>{
            const sliderContainer = document.getElementById("slider_container");
             setWidth(sliderContainer.clientWidth);
             console.log(width);
             console.log(leftClicks);       
            sliderContainer.scrollTo({left:(width*leftClicks),behavior:'auto'});
         }
        setWidth(document.getElementById("slider_container").clientWidth);  
        
        window.addEventListener('resize',listner);
        
        return () => {
            window.removeEventListener('resize', listner);
        }
        // console.log('here is effect');
    }, [width,leftClicks,rightClicks])
 
    return (    
        <div className="responsive_wrapper ">
            <section className="responsive_section ">
                <div className="slider_container_wrapper container">
                    <div id="slider_container"    onScroll={onScrollHandler}>
                            <div className=" flex" id="devices_slider" >   
                                <div className="img_container flex">
                                    <img className="slider_img" src={AppleIpad} alt="" />
                                    <div>
                                        <p>ipad Mini 2019<br />768x1024</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={AppleIphonX} alt="" />
                                    <div>
                                        <p>iPhone X<br />375x812</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={AppleIphon8Plus} alt="" />
                                    <div>
                                        <p>iPhone 8 Plus<br />414x736</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={SamsungGalaxyS9} alt="" />
                                    <div>
                                        <p>Galaxy S9 Plus<br />412x740</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={iPhoneSE} alt="" />
                                    <div>
                                        <p>iPhone SE<br />320x568</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={GalaxyS7} alt="" />
                                    <div>
                                        <p>Galaxy S7<br />360x640</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={AppleiPadPro13} alt="" />
                                    <div>
                                        <p>Apple iPad Pro 13<br />360x640</p> 
                                    </div>
                                </div> 
                                <div className="img_container flex">
                                    <img className="slider_img" src={Macbook} alt="" />
                                    <div>
                                        <p>Mackbook<br />360x640</p> 
                                    </div>
                                </div> 
                                
                            </div>  
                    
                            {/* initialContainerWidth,setContainerWidth */}
                            <div onClick={()=>onLeftClick(width,leftClicks,setLeftClicks,setRightClicks,rightClicks,setDevices,setanimStyle)} id="left"> &lt;</div>
                            <div onClick={()=>onRightClick(width,rightClicks,setRightClicks,setLeftClicks,leftClicks,setDevices,setanimStyle)} id="right">&gt;</div>
                    </div> 
                </div>
                <div className="about_project_master_wrapper">
                    <div className="about_project_wrapper container">
                        <h2>Project title</h2>
                        <div className="about_project flex"> 
                            <div className="project_description">
                                n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. lorem ipsum tloremm jsk
                            </div>
                            <div className="project_pic">
                                <img style={animStyle} id="device_img" src={devices} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default  Show_Responsive;