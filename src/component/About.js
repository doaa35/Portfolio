import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () =>{

    useEffect(
        ()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <div id='about' data-aos='fade-right'>
            <p className='text-uppercase p-tx'>about </p>
            <h4 className='text-uppercase mb-4'>who am i?</h4>
            <p>
                I am a computer science student in HTI. 
                I love exploring new technologies and often amazed by the progress we as a 
                human species have mad so far in the recent years (apart from the headphone-jack part!!)
                <span className='d-block mt-3'>
                I have started reflecting my ideas and thougths through creating web pages.
                </span>
            </p>
        </div>
    )
}

export default About;